const express = require('express');
const os = require('os');

const app = express();
const port = 8080;

// Predefined color for the backend
const color = 'blue';

app.get('/info', (req, res) => {
    const info = {
        podName: os.hostname(),
        podIP: req.connection.localAddress,
        cluster: process.env.CLUSTER || 'unknown-cluster',
        color: color
    };
    res.json(info);
});

app.listen(port, () => {
    console.log(`Backend app running on port ${port}`);
});
