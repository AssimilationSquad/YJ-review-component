const faker = require('faker');
const mysql = require('mysql');
const connection = require('../database/index.js');

const insertUser = function insertUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const thumbnail = faker.image.avatar();
  const params = [firstName, lastName, thumbnail];
  connection.query('INSERT INTO Users_tbl (First_name, Last_name, Thumbnail_url) VALUES (?, ?, ?)', params);
};

const seedUsers = function seedUsers(n) {
  for (let i = 0; i < n; i += 1) {
    insertUser();
  }
  connection.end();
};

seedUsers(50);

module.exports = seedUsers;
