const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helpers = require('./queryHelpers.js');

const app = express();
const port = 3002;

app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/rooms/:homeid', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/rooms/:homeid/reviews', (req, res, next) => {
  const homeID = req.params.homeid;
  const keyword = req.query.searchBar;
  const results = {};

  if (keyword === undefined) {
    helpers.getReviews(homeID, (result) => {
      results.reviews = result;
      helpers.getRatings(homeID, (result2) => {
        results.ratings = result2;
        res.status(200).json(results);
      });
    });
  } else {
    helpers.searchReviews(homeID, keyword, (err, searchRes) => {
      if (err) {
        next(err);
      } else {
        res.status(200).json(searchRes);
      }
    });
  }
});


app.patch('/rooms/:homeid/reviews/:reviewid', (req, res) => {
  const reviewID = req.params.reviewid;
  // update database
  helpers.updateFlags(reviewID, () => {
    res.status(200).send("flag recorded!");
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));