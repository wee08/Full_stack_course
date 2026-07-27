const {
  getemployee,
  createEmployee,
} = require("../controller/employee.controller");
const employeeRoute = (app) => {
  app.get("/api/v1/employee/GetAll", getemployee);
  app.post("/api/v1/employee/create", createEmployee);
};

module.exports = employeeRoute;
