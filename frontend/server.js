const express = require('express');
const axios = require('axios');

const app = express();
const port = 8080;

// Backend service URL
const backendUrl = process.env.BACKEND_URL;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(backendUrl);
        const backendInfo = response.data;

        res.send(`
            <h1>Frontend App</h1>
            <p>Pod Name: ${backendInfo.podName}</p>
            <p>Pod IP: ${backendInfo.podIP}</p>
            <p>Cluster: ${backendInfo.cluster}</p>
            <p>Color: ${backendInfo.color}</p>
        `);
    } catch (error) {
        res.send('<p>Failed to reach the backend app</p>');
    }
});

app.listen(port, () => {
    console.log(`Frontend app running on port ${port}`);
});
