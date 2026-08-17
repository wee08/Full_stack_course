const { Sequelize } = require("sequelize");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "../../.env") });
const sequelize = new Sequelize(
  process.env.DB_NAME, // db name
  process.env.DB_USER, // db user
  process.env.DB_PASSWORD, // db password
  {
    host: process.env.DB_HOST, // host
    port: Number(process.env.DB_PORT || 3306), // db port
    dialect: "mysql", // db
    logging: false, // set to console.log to see raw SQL queries
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
}

testConnection();

module.exports = sequelize;
