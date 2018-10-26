const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yukimysql',
  database: 'Reviews_db',
});


const insertReview = function insertReview(homeID, userID) {
  const reviewDate = faker.date.between('2015-01-01', '2018-10-26');
  const stars = Math.floor(Math.random() * 6);
  const flags = 0;
  const body = faker.lorem.paragraph();
  const params = [homeID, userID, reviewDate, stars, flags, body];
  connection.query('INSERT INTO Reviews_tbl (Home_id, User_id, Review_date, Stars, Flags, Body) VALUES (?, ?, ?, ?, ?, ?)', params);
};


const seedReviews = function seedReviews(n) {
  connection.connect();
  for (let i = 1; i <= n; i += 1) {
    insertReview(i, i);
  }
  connection.end();
};

seedReviews(50);

module.exports = seedReviews;
