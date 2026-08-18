const express = require("express");

const productRoute = require("./src/router/product.route");
const employeeRoute = require("./src/router/employee.route");
const sysRoute = require("./src/router/sys.route");
const teacherRoute = require("./src/router/teacher.route");
const user = require("./src/models/user");
const teacher = require("./src/models/teacher");
const sequelize = require("./src/config/sequelizeConfig");
const { addListener } = require("./src/config/config");
const cardpaywayRoute = require("./src/router/cardpayway.route");
const app = express();
app.use(express.json());
const PORT = 3000;
sysRoute(app);
teacherRoute(app);
cardpaywayRoute(app);
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synced");
  })
  .catch((error) => {
    console.error("Database sync failed:", error.message);
  });

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
