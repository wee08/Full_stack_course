const express = require("express");

const productRoute = require("./src/router/product.route");
const teacherRoute = require("./src/router/teacher.route");
const employeeRoute = require("./src/router/employee.route");
const sysRoute = require("./src/router/sys.route");
const user = require("./src/models/user");
const sequelize = require("./src/config/sequelizeConfig");
const { addListener } = require("./src/config/config");
const app = express();
app.use(express.json());
const PORT = 3000;

sysRoute(app);

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
