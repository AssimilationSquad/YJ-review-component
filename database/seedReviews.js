const mysql = require('mysql');
const faker = require('faker');
const connection = require('../database/index.js');

const insertReview = function insertReview(homeID, userID) {
  const reviewDate = faker.date.between('2015-01-01', '2018-10-26');
  const cleanStars = Math.floor(Math.random() * 6);
  const commStars = Math.floor(Math.random() * 6);
  const accStars = Math.floor(Math.random() * 6);
  const locStars = Math.floor(Math.random() * 6);
  const checkStars = Math.floor(Math.random() * 6);
  const valStars = Math.floor(Math.random() * 6);
  const flags = 0;
  const body = faker.lorem.paragraph();
  const params = [homeID, userID, reviewDate, body, cleanStars, commStars, accStars, locStars, checkStars, valStars, flags];
  connection.query('INSERT INTO Reviews_tbl (Home_id, User_id, Review_date, Body, Cleanliness_stars, Communication_stars, Accuracy_stars, Location_stars, Checkin_stars, Value_stars, Flags) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', params);
};


const seedReviews = function seedReviews(n) {
  for (let i = 1; i <= n; i += 1) {
    const numReviews = Math.ceil(Math.random() * 10);
    for (let j = 1; j <= numReviews; j += 1) {
      const randomUser = Math.ceil(Math.random() * 50);
      insertReview(i, randomUser);
    }
  }
  connection.end();
};

seedReviews(100);

module.exports = seedReviews;
