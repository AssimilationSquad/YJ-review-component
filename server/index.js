const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index.js');
const helpers = require('./queryHelpers.js');

const app = express();
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/rooms/:homeid', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/rooms/:homeid/reviews', (req, res) => {
  const homeID = req.params.homeid;
  const keyword = req.query.keyword || undefined;
  const results = {};

  if (keyword === undefined) {
    helpers.getReviews(homeID, (result) => {
      results.reviews = result;
      helpers.getRatings(homeID, (result) => {
        results.ratings = result;
        console.log(results);
        res.status(200).send(results);
      });
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
