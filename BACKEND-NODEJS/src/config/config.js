const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "emp_management",
});

// connect ot db
connection.connect((error) => {
  if (error) {
    console.error("data base not connect", error);
    return;
  }
  console.log("connected");
});

module.exports = connection;
