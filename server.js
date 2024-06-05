import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import paypal from 'paypal-rest-sdk';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mapAPIkey = process.env.MAP_API;
const printifyApiKey = process.env.PRINTIFY_API_KEY;
const printifyShopID = process.env.PRINTIFY_SHOPID;
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;

// Configure PayPal SDK
paypal.configure({
  mode: 'sandbox', // Change to 'live' for production
  client_id: process.env.PAYPAL_CLIENT_ID_SB,
  client_secret: process.env.PAYPAL_CLIENT_SECRET_SB,
});

app.use(express.json());
app.use(cors());

// Configure nodemailer with your email provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail', // Example: 'gmail'
  auth: {
    user: emailUser,
    pass: emailPass,
  },
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

// PayPal configuration endpoint
const paypalClientId = process.env.PAYPAL_CLIENT_ID_SB;

app.get('/config', async (_, res) => {
  if (!paypalClientId) {
    console.error('PayPal client ID not found.');
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  res.json({ paypalClientId });
});


// PayPal validation endpoint
app.post('/paypal/validate', async (req, res) => {
  const { paymentDetails, total } = req.body;

  if (!paymentDetails) {
    return res.status(400).json({ error: 'Invalid request data' });
  }

  try {
    const isPaymentValid = validatePaymentDetails(paymentDetails, total);

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
      const mailOptions = {
        from: emailUser,
        to: address_to.email,
        bcc: emailUser,
        subject: 'Order Placed, Thank You! Exotic Relief by Dr. Joi',
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>Hello ${address_to.first_name},</h2>
            <p>Thank you for placing your order with Exotic Relief by Dr. Joi. It is currently being processed, and you will receive a confirmation email with more details in the next few days.</p>
            <h3>Order Details:</h3>
            <p><strong>Order ID:</strong> ${responseBody.id}</p>
            <p><strong>Shipping Address:</strong></p>
            <p>
              ${address_to.first_name} ${address_to.last_name}<br>
              ${address_to.address1}<br>
              ${address_to.address2 ? address_to.address2 + '<br>' : ''}
              ${address_to.city}, ${address_to.region} ${address_to.zip}<br>
              ${address_to.country}
            </p>
            <p>Thank you,</p>
            <p>Dr. Joi</p>
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
    paymentDetails.purchase_units[0].amount.value === total.toString();

  if (isValid) {
    console.log('Server validation complete');
  } else {
    console.log('Server validation error');
    console.log('paymentDetails:', paymentDetails);
  }

  return isValid;
}
