const express = require('express');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

router.get('/:city', async (req, res) => {
    const city = req.params.city;
    const apiKey = process.env.WEATHERSTACK_API_KEY;
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    try {
        const response = await axios.get(url);
        if (response.data.error) {
            res.status(400).json({ error: response.data.error.info });
        } else {
            res.json(response.data);
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching weather data' });
    }
});

module.exports = router;
