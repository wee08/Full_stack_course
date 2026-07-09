const getAllStudent = require("../controller/getAllStudent.controller");

function getAllStudentRoute(app) {
  app.get("/api/student/list", getAllStudent);
}
module.exports = getAllStudentRoute;
