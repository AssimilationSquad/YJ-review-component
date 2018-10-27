const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const helpers = require('./queryHelpers.js');

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../public'));

app.get('/home/:homeid/reviews', (req, res) => {
  const homeID = req.params.homeid;
  // get data from database
  helpers.getReviews(homeID, (results) => {
    res.status(200).send(results);
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
