const createStudent = require("../controller/createStudnet.controller");

function createStudentRoute(app) {
  app.get("/api/student/create", createStudent);
}

module.exports = createStudentRoute;
