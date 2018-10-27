CREATE DATABASE IF NOT EXISTS Reviews_db;

USE Reviews_db;

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
  Stars INT,
  Flags INT,
  Body TEXT,
  PRIMARY KEY (Review_id),
  FOREIGN KEY (User_id) REFERENCES Users_tbl (User_id)
);

ALTER TABLE Reviews_tbl ADD FULLTEXT (Body);