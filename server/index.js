const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../public'));

app.listen(port, () => console.log(`Server listening on port ${port}`));