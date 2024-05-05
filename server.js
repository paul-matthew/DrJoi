import fetch from 'node-fetch';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import the cors package
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

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
      res.status(200).json(products); // Send the products as a JSON response
    } else {
      res.status(500).json({ error: 'Failed to fetch products from Printify' });
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

async function publishProduct(productId) {
  try {
    const publishResponse = await fetch(`https://api.printify.com/v1/shops/${process.env.PRINTIFY_SHOPID}/products/${productId}/publish.json`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.PRINTIFY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: true,
        description: true,
        images: true,
        variants: true,
        tags: true,
        keyFeatures: true,
        shipping_template: true,
      }),
    });

    if (publishResponse.ok) {
      console.log(`Product ${productId} published successfully.`);
    } else {
      console.error(`Failed to publish product ${productId}.`);
    }
  } catch (error) {
    console.error('Error in publishing product:', error);
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
