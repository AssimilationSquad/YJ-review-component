const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const helpers = require('./queryHelpers.js');

const app = express();
const port = 3002;

// app.use(express.static('../public'));
app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/rooms/:homeid/reviews', (req, res) => {
  const homeID = req.params.homeid;
  const keyword = req.query.keyword || undefined;
  // get data from database
  if (keyword === undefined) {
    helpers.getReviews(homeID, (results) => {
      res.status(200).send(results);
    });
  } else {
    helpers.searchReviews(homeID, keyword, (results) => {
      res.status(200).send(results);
    });
  }
});

app.patch('/rooms/:homeid/reviews/:reviewid', (req, res) => {
  const reviewID = req.params.reviewid;
  // update database
  helpers.updateFlags(reviewID, () => {
    console.log('Flag added to review: ', reviewID);
    res.status(200).send("flag recorded!");
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
