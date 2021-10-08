const express = require('express');

const PORT = 3001;

const app = express();

app.get(' ' , (req, res) => {
    res.json(`${req.method} request received`);
});

app.post('', (req,res) => {
    res.json(`${req.method}`)
});

