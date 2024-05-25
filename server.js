import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mapAPIkey = process.env.MAP_API;

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

// Serve your client-side application
// app.get('*', (req, res) => {
//   const __dirname = path.dirname(new URL(import.meta.url).pathname);
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
