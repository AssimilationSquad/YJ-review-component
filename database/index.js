const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  password: 'yukimysql',
  database: 'reviewsdb',
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('connected to MySQL database!');
});

module.exports = connection;
