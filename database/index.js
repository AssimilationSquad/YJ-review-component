const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yukimysql',
  database: 'Reviews_db',
});

connection.connect((err) => {
  if (err) {
    const errMsg = `error connecting: ${err.stack}`;
    console.error(errMsg);
  }
  console.log('connected to MySQL database!');
});
