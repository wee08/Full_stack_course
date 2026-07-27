const employee = require("../controller/employee.controller");
const teacherRoute = (app) => {
  app.get("/api/teacher/emp", employee);
};

module.exports = teacherRoute;
