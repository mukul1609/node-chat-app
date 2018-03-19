const express = require('express');
const path = require('path');

const port = process.env.port || 3000;
const publicPath = path.join(__dirname, '../public');
var app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log('Sever is up ');
});

