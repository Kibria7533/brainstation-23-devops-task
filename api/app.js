const express = require('express');
const axios = require('axios');
const app = express();
const moment = require("moment-timezone");
const os = require('os')
require('dotenv').config()

app.get("/", (req, res) => {
    return res.send(`working, please visit "http://localhost:3000/api/hello" and "http://localhost:3000/api/health" to see the API's`)
})

// Endpoint returning hostname, datetime, version, and weather data for Dhaka
app.get('/api/hello', async (req, res) => {
    const hostname = os.hostname();
    const dateTime = moment().tz("Asia/Dhaka").format("YYYY-MM-DD hh:mm:ss A")

    try {
        const dhaka = {
            lat: 23.777176,
            lon: 90.399452,
        }
        const weatherApiKey = '96464cce59634b5233f57d7e7e15cf0f';
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${dhaka.lat}&lon=${dhaka.lon}&appid=${weatherApiKey}&units=metric`

        const response = await axios.get(url);
        const temperature = response?.data?.main?.temp ?? 20;

        const responseData = {
            hostname,
            datetime: dateTime,
            version: process.env.VERSION,
            weather: {
                dhaka: {
                    temperature: Math.round(temperature),
                    temp_unit: 'c',
                },
            },
        };

        res.json(responseData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
