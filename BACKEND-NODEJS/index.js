const express = require("express");

const productRoute = require("./src/router/product.route");
const teacherRoute = require("./src/router/teacher.route");
const employeeRoute = require("./src/router/employee.route");
const sysRoute = require("./src/router/sys.route");

const app = express();
app.use(express.json());
const PORT = 3000;

sysRoute(app);
// running server
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
