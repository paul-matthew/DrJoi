import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// import path from 'path';
import paypal from 'paypal-rest-sdk';
import nodemailer from 'nodemailer';
import Stripe from 'stripe';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mapAPIkey = process.env.MAP_API;
const printifyApiKey = process.env.PRINTIFY_API_KEY;
const printifyShopID = process.env.PRINTIFY_SHOPID;
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const stripe = Stripe(process.env.STRIPE_CLIENT_SECRET_SB); 

// Configure PayPal SDK
paypal.configure({
  mode: 'sandbox', // Change to 'live' for production
  client_id: process.env.PAYPAL_CLIENT_ID_SB,
  client_secret: process.env.PAYPAL_CLIENT_SECRET_SB,
});

app.use(express.json());
app.use(cors());

// PayPal configuration endpoint
app.get('/config', (req, res) => {
  const paypalClientId = process.env.PAYPAL_CLIENT_ID_SB;
  if (!paypalClientId) {
    console.error('PayPal client ID not found.');
    return res.status(500).json({ error: 'Internal Server Error' });
  }
  res.json({ paypalClientId });
});

// Configure nodemailer with your email provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail', // Example: 'gmail'
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

app.get('/stripe/publishable-key', (req, res) => {
  res.json({ publishableKey: process.env.STRIPE_CLIENT_ID_SB });
});

app.post('/stripe/create-payment-intent', async (req, res) => {
  const { amount } = req.body;
  console.log("This is the amount:",amount);

  if (!amount) {
    return res.status(400).json({ error: 'YO Missing required param: amount.' });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Stripe webhook endpoint
app.post('/stripe/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent was successful:', paymentIntent);
      break;
    case 'payment_intent.payment_failed':
      const paymentFailure = event.data.object;
      console.error('PaymentIntent failed:', paymentFailure);
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).json({ received: true });
});

// Endpoint to fetch products from Printify
app.get('/products', async (req, res) => {
  try {
    const printifyResponse = await fetch(`https://api.printify.com/v1/shops/${printifyShopID}/products.json`, {
      headers: {
        Authorization: `Bearer ${printifyApiKey}`,
      }
    });

    if (printifyResponse.ok) {
      const products = await printifyResponse.json();
      res.status(200).json(products);
    } else {
      res.status(500).json({ error: 'Failed to fetch products from Printify' });
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to fetch regions
app.get('/maps/regions', async (req, res) => {
  const selectedCountry = req.query.country;

  const apiUrl = `https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`;
  const headers = {
    "X-CSCAPI-KEY": mapAPIkey
  };

  try {
    const response = await fetch(apiUrl, { headers });
    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.log('Error fetching states:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to fetch cities
app.get('/maps/cities', async (req, res) => {
  const { country, region } = req.query;

  const apiUrl = `https://api.countrystatecity.in/v1/countries/${country}/states/${encodeURIComponent(region)}/cities`;
  const headers = {
    "X-CSCAPI-KEY": mapAPIkey
  };

  try {
    const response = await fetch(apiUrl, { headers });
    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.log('Error fetching cities:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PayPal validation endpoint
app.post('/paypal/validate', async (req, res) => {
  const { paymentDetails, total, taxAmount, shippingCost } = req.body;

  if (!paymentDetails || total === undefined || taxAmount === undefined || shippingCost === undefined) {
    return res.status(400).json({ error: 'Invalid request data' });
  }

  try {
    const isPaymentValid = validatePaymentDetails(paymentDetails, total, taxAmount, shippingCost);

    if (isPaymentValid) {
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false, error: 'Invalid payment' });
    }
  } catch (error) {
    console.error('Error processing PayPal order:', error);
    res.status(500).json({ success: false, error: 'Failed to process PayPal order' });
  }
});

// ORDERS
const orders = [];

// Endpoint to create a new order
app.post('/orders', async (req, res) => {
  const { address_to, line_items } = req.body;
  const { subtotal,taxAmount,shippingCost,totalPayment } = req.body;


  if (!address_to || !line_items) {
    return res.status(400).json({ error: 'Invalid address or order data' });
  }

  try {
    const orderResponse = await fetch(`https://api.printify.com/v1/shops/${printifyShopID}/orders.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${printifyApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (orderResponse.ok) {
      const responseBody = await orderResponse.json();
      orders.push(responseBody); // Store the order details in memory

      // Email Confirmation of receipt of Order
      const getShippingTime = (country) => {
        switch (country.toUpperCase()) {
          case 'US':
            return '3-7 business days after order is processed';
          case 'CA':
            return 'up to 30 business days after order is processed';
          default:
            return 'varies by location';
        }
      };
      
      const shippingTime = getShippingTime(address_to.country);
      console.log("Received line_items:", line_items);
      
      const lineItemsHtml = line_items.map(item => `
      <tr style='padding-top:20px'>
        <td style="padding: 5px; border-bottom: 1px solid #ddd;"><b>Product ID</b>:${item.product_id}</td>
        <td style="padding: 5px; text-align: right; border-bottom: 1px solid #ddd;">$${item.price/100} ea</td>
        <td style="padding: 5px; text-align: right; border-bottom: 1px solid #ddd;">x${item.quantity}</td>
      </tr>
    `).join('');
    
    const mailOptions = {
      from: emailUser,
      to: address_to.email,
      bcc: emailUser,
      subject: 'Order Placed, Thank You! Exotic Relief by Dr. Joi',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px;">
          <h2 style="text-align: center;">Thank You for Your Order!</h2>
          <p style="text-align: center;">Hello ${address_to.first_name},</p>
          <p style="text-align: center;">Thank you for placing your order with Exotic Relief by Dr. Joi. It is currently being processed, and you will recieve a notification once the order has been shipped.</p>
          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Order Details</h3>
          <p><strong>Order ID:</strong> ${responseBody.id}</p>
          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Shipping Address</h3>
          <p>
            ${address_to.first_name} ${address_to.last_name}<br>
            ${address_to.address1}<br>
            ${address_to.address2 ? address_to.address2 + '<br>' : ''}
            ${address_to.city}, ${address_to.region} ${address_to.zip}<br>
            ${address_to.country}
          </p>
          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Cost Breakdown</h3>
          ${lineItemsHtml}
          <table style="padding-top:20px; width: 100%; border-collapse: collapse;">
            <tr>
              <td style="border: 1px solid #ccc; padding: 10px;"><strong>Subtotal</strong></td>
              <td style="border: 1px solid #ccc; padding: 10px; text-align: right;">$${subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ccc; padding: 10px;"><strong>Tax</strong></td>
              <td style="border: 1px solid #ccc; padding: 10px; text-align: right;">$${taxAmount.toFixed(2)}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ccc; padding: 10px;"><strong>Shipping Cost</strong></td>
              <td style="border: 1px solid #ccc; padding: 10px; text-align: right;">$${shippingCost.toFixed(2)}</td>
            </tr>
            <tr>
              <td style="border: 1px solid #ccc; padding: 10px;"><strong>Total Cost</strong></td>
              <td style="border: 1px solid #ccc; padding: 10px; text-align: right;"><strong>$${totalPayment.toFixed(2)}</strong></td>
            </tr>
            <tbody>
          </tbody>
          </table>
          <h3 style="border-bottom: 2px solid #eee; padding-bottom: 5px;">Shipping Information</h3>
          <p>Estimated Shipping Time: ${shippingTime}</p>
          <p style="text-align: start;">Thank you,</p>
          <p style="text-align: start;">Dr. Joi</p>
        </div>
      `
    };  
    
    
      

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });

      res.status(200).json({   
        success: true,
        orderStatus: orderResponse.statusText,
        message: 'Order placed successfully with Printify', 
      });
    } else {
      res.status(500).json({   
        success: false,
        orderStatus: orderResponse.statusText,
        error: 'Failed to place order with Printify', 
      });
    }
  } catch (error) {
    console.error('Error processing order:', error);
    res.status(500).json({ error: 'Failed to process order' });
  }
});

// Endpoint to fetch all orders
app.get('/orders', (req, res) => {
  res.status(200).json(orders);
});

// SHIPPING COSTS
const shipping = [];

// Endpoint to calculate shipping cost
app.post('/shipping-cost', async (req, res) => {
  const { address_to, line_items } = req.body;

  try {
    // Make a request to Printify's API to calculate shipping cost
    const shippingResponse = await fetch(`https://api.printify.com/v1/shops/${printifyShopID}/orders/shipping.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${printifyApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address_to, line_items }),
    });

    if (!shippingResponse.ok) {
      const errorData = await shippingResponse.json();
      return res.status(500).json({ success: false, error: `Failed to calculate shipping cost: ${errorData.error}` });
    }

    const shippingData = await shippingResponse.json();
    shipping.push(shippingData); // Store shipping data in the array

    res.status(200).json({ success: true, shippingCost: shippingData.standard });
  } catch (error) {
    console.error('Error calculating shipping cost:', error);
    res.status(500).json({ success: false, error: 'Failed to calculate shipping cost' });
  }
});

// Endpoint to fetch all shipping cost details
app.get('/shipping-cost', async (req, res) => {
  try {
    res.status(200).json(shipping);
  } catch (error) {
    console.error('Error fetching shipping cost details:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch shipping cost details' });
  }
});

// Endpoint to handle subscription using Mailjet
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const mailjetApiKey = process.env.MAILJET_API_KEY;
    const mailjetApiSecret = process.env.MAILJET_API_SECRET;
    const contactListId = process.env.MAILJET_CONTACT_LIST_ID;

    const response = await fetch(`https://api.mailjet.com/v3/REST/contactslist/${contactListId}/managemanycontacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${mailjetApiKey}:${mailjetApiSecret}`).toString('base64')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "Action": "addnoforce",
        "Contacts": [
          { "Email": email }
        ]
      })
    });

    if (response.ok) {
      res.json({ message: 'Subscription successful!' });
    } else {
      res.json({ message: 'Failed to subscribe. Please try again.' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred. Please try again.' });
  }
});

app.get('/subscribe', (req, res) => {
  res.status(200).json(orders);
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'DoctorJoi@exoticrelief.com', // Your email address
    subject: `Contact Form Submission from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent' });    
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Function to validate payment details
function validatePaymentDetails(paymentDetails, total) {
  const isValid =
    paymentDetails &&
    paymentDetails.status === 'COMPLETED' &&
    paymentDetails.purchase_units &&
    paymentDetails.purchase_units[0] &&
    paymentDetails.purchase_units[0].amount &&
    parseFloat(paymentDetails.purchase_units[0].amount.value) === parseFloat(total);

  if (isValid) {
    console.log('Server validation complete');
  } else {
    console.log('Server validation error');
    console.log('paymentDetails:', paymentDetails);
  }

  return isValid;
}
