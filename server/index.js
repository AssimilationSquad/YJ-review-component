const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helpers = require('./queryHelpers.js');

const app = express();
const port = 3002;

app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/rooms/:homeid/reviews', (req, res) => {
  const homeID = req.params.homeid;
  const { keyword } = req.query;
  // get data from database
  if (keyword === undefined) {
    helpers.getReviews(homeID, (err, results) => {
      if (err) {
        throw err;
      } else {
        res.status(200).send(results);
      }
    });
  } else {
    helpers.searchReviews(homeID, keyword, (err, results) => {
      if (err) {
        throw err;
      } else {
        res.status(200).send(results);
      }
    });
  }
});

app.patch('/rooms/:homeid/reviews/:reviewid', (req, res) => {
  const reviewID = req.params.reviewid;
  // update database
  helpers.updateFlags(reviewID, (err) => {
    if (err) {
      throw err;
    } else {
      res.status(200).send('flag recorded!');
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
