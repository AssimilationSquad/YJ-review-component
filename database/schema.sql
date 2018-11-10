CREATE DATABASE IF NOT EXISTS reviewsdb;

USE reviewsdb;

CREATE TABLE IF NOT EXISTS Users_tbl (
  User_id INT AUTO_INCREMENT,
  First_name TEXT,
  Last_name TEXT,
  Thumbnail_url TEXT,
  PRIMARY KEY(User_id)
);

CREATE TABLE IF NOT EXISTS Reviews_tbl (
  Review_id INT AUTO_INCREMENT,
  Home_id INT,
  User_id INT,
  Review_date DATE,
  Body TEXT,
  Cleanliness_stars INT,
  Communication_stars INT,
  Accuracy_stars INT,
  Location_stars INT,
  Checkin_stars INT,
  Value_stars INT,
  Flags INT,
  PRIMARY KEY (Review_id),
  FOREIGN KEY (User_id) REFERENCES Users_tbl (User_id)
);

ALTER TABLE Reviews_tbl ADD FULLTEXT (Body);