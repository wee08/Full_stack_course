const updateStudent = require("../controller/updateStudent.controller");
function updateStudentRoute(app) {
  app.get("/api/student/update", updateStudent);
}
module.exports = updateStudentRoute;
