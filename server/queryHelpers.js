const connection = require('../database/index.js');

const getReviews = function getReviews(homeID, cb) {
  const params = [homeID];
  connection.query(
    `SELECT Review_id, First_name, Review_date, Body, Stars FROM Users_tbl 
    INNER JOIN Reviews_tbl ON Users_tbl.User_id = Reviews_tbl.User_id 
    WHERE Home_id = ? ORDER BY Review_date DESC`,
    params,
    (error, results) => {
      if (error) {
        throw error;
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
        throw error;
      } else {
        cb(results);
      }
    },
  );
};

const searchReviews = function searchReviews(homeID, keyword, cb) {
  const params = [keyword, homeID];
  connection.query(
    `SELECT Review_id, First_name, Review_date, Body, Stars FROM Users_tbl 
    INNER JOIN Reviews_tbl ON Users_tbl.User_id = Reviews_tbl.User_id 
    WHERE (MATCH(Body) AGAINST (?) && Home_id = ?) ORDER BY Review_date DESC`,
    params,
    (error, results) => {
      if (error) {
        throw error;
      } else {
        cb(results);
      }
    },
  );
};

module.exports = { getReviews, updateFlags, searchReviews };
