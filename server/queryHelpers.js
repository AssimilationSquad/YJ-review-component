const connection = require('../database/index.js');

const getReviews = function getReviews(homeID, cb) {
  const params = [homeID];
  connection.query(
    `SELECT Review_id, First_name, Review_date, Body, Cleanliness_stars, Communication_stars, Accuracy_stars, Location_stars, Checkin_stars, Value_stars, Thumbnail_url FROM Users_tbl 
    INNER JOIN Reviews_tbl ON Users_tbl.User_id = Reviews_tbl.User_id 
    WHERE Home_id = ? ORDER BY Review_date DESC`,
    params,
    (error, results) => {
      if (error) {
        cb(error);
      } else {
        cb(results);
      }
    },
  );
};

const updateFlags = function updateFlags(reviewID, cb) {
  const params = [reviewID];
  connection.query(
    'UPDATE Reviews_tbl SET flags = flags + 1 WHERE Review_id = ? ORDER BY Review_date DESC',
    params,
    (error, results) => {
      if (error) {
        cb(error);
      } else {
        cb(results);
      }
    },
  );
};

const searchReviews = function searchReviews(homeID, keyword, cb) {
  const params = [keyword, homeID];
  connection.query(
    `SELECT Review_id, First_name, Review_date, Body, Cleanliness_stars, Communication_stars, Accuracy_stars, Location_stars, Checkin_stars, Value_stars, Thumbnail_url FROM Users_tbl 
    INNER JOIN Reviews_tbl ON Users_tbl.User_id = Reviews_tbl.User_id 
    WHERE (Home_id = ? && MATCH(Body) AGAINST (?)) ORDER BY Review_date DESC`,
    params,
    (error, results) => {
      if (error) {
        cb(error);
      } else {
        cb(results);
      }
    },
  );
};

const getRatings = function getRatings(homeID, cb) {
  const params = [homeID];
  connection.query(
    `SELECT AVG(Cleanliness_stars) 'Avg_clean', AVG(Communication_stars) 'Avg_comm', AVG(Accuracy_stars) 'Avg_acc', AVG(Location_stars) 'Avg_loc', AVG(Checkin_stars) 'Avg_check', AVG(Value_stars) 'Avg_val'
    FROM Reviews_tbl WHERE Home_id=?`,
    params,
    (error, results) => {
      if (error) {
        cb(error);
      } else {
        cb(results);
      }
    },
  );
};

module.exports = {
  getReviews, updateFlags, searchReviews, getRatings,
};
