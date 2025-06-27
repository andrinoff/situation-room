const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); // Allow requests from our frontend

// Endpoint for space data
app.get('/api/astros', async (req, res) => {
  try {
    const response = await axios.get('http://api.open-notify.org/astros.json');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching astronaut data' });
  }
});

// Endpoint for a random activity
app.get('/api/activity', async (req, res) => {
  try {
    const response = await axios.get('https://bored-api.appbrewery.com/random');
    const parsedJSON = JSON.parse(response.data)
    console.log(parsedJSON.activity)
    res.json(parsedJSON.activity);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching activity' });
  }
});

// Endpoint for crypto price data
app.get('/api/crypto', async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching crypto data' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
