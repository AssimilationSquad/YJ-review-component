const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yukimysql',
  database: 'Reviews_db',
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('connected to MySQL database!');
});

module.exports = connection;
