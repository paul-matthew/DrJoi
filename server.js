import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import paypal from 'paypal-rest-sdk';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mapAPIkey = process.env.MAP_API;
const paypalClientId = process.env.PAYPAL_CLIENT_ID_SB;
const printifyApiKey = process.env.PRINTIFY_API_KEY
const printifyShopID = process.env.PRINTIFY_SHOPID

// Configure PayPal SDK
paypal.configure({
  mode: 'sandbox', // Change to 'live' for production
  client_id: paypalClientId,
  // client_secret: paypalClientSecret,
});

app.use(express.json());
app.use(cors());

// Endpoint to fetch products from Printify
app.get('/products', async (req, res) => {
  try {
    const printifyResponse = await fetch(`https://api.printify.com/v1/shops/${process.env.PRINTIFY_SHOPID}/products.json`, {
      headers: {
        Authorization: `Bearer ${process.env.PRINTIFY_API_KEY}`,
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

  const requestOptions = {
    method: 'GET',
    headers: headers
  };

  try {
    console.log("Requesting regions from:", apiUrl); // Log the API request URL
    const response = await fetch(apiUrl, requestOptions);
    const result = await response.json();
    console.log("Regions received:", result); // Log the received regions
    res.json(result);
  } catch (error) {
    console.log('Error fetching states:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to fetch cities
app.get('/maps/cities', async (req, res) => {
  const selectedCountry = req.query.country;
  const selectedRegion = req.query.region;

  const apiUrl = `https://api.countrystatecity.in/v1/countries/${selectedCountry}/states/${encodeURIComponent(selectedRegion)}/cities`;
  const headers = {
    "X-CSCAPI-KEY": mapAPIkey
  };

  const requestOptions = {
    method: 'GET',
    headers: headers
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    const result = await response.json();
    res.json(result);
  } catch (error) {
    console.log('Error fetching cities:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// PayPal configuration endpoint
app.get('/config', (req, res) => {
  res.json({
    paypalClientId: paypalClientId,
    paypalSandboxUrl: `https://www.sandbox.paypal.com/sdk/js?client-id=${paypalClientId}`,
  });
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

//ORDERS

const orders = [];

// Endpoint to create a new order
app.post('/orders', async (req, res) => {
  const { address_to, line_items } = req.body;

  if (!address_to) {
    console.log("This is the address that was given:", address_to);
    return res.status(400).json({ error: 'Invalid address data' });
  }

  if (!line_items) {
    console.log("This is the product info for the order", line_items);
    return res.status(400).json({ error: 'Invalid order/shipping data' });
  }

  try {
    console.log('Request Body:', req.body);

    const orderResponse = await fetch(`https://api.printify.com/v1/shops/${printifyShopID}/orders.json`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${printifyApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    console.log('Printify API Response:', orderResponse.status, orderResponse.statusText);

    if (orderResponse.ok) {
      console.log('Order placed successfully with Printify.');
      const responseBody = await orderResponse.json();
      orders.push(responseBody);  // Store the order details in memory
      res.status(200).json({   
        success: true,
        orderStatus: orderResponse.statusText,
        message: 'Order placed successfully with Printify', 
      });
    } else {
      console.error('Failed to place order with Printify.');
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

  console.log("Paypal platform total", paymentDetails.purchase_units[0].amount.value);
  console.log("client side total", total.toString());

  if (isValid) {
    console.log('Server validation complete');
  } else {
    console.log('Server validation error');
    console.log('paymentDetails:', paymentDetails);
  }

  return isValid;
}