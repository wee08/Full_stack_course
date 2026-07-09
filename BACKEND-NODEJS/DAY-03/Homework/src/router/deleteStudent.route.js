const deleteStudent = require("../controller/deleteStudent.controller");
function deleteStudentRoute(app) {
  app.get("/api/student/delete", deleteStudent);
}
module.exports = deleteStudentRoute;
