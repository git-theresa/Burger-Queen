//  require MySql
var mysql = require("mysql");
require("dotenv").config()


var connection = mysql.createConnection (
  process.env.JAWSDB_URL || {
  host: process.env.HOST,
  port: 3306,
  user: process.env.USER_NAME,
  password: process.env.USER_PWD,
  database: "burger_db"
  }
);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
