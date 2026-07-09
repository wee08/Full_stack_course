const getStudentById = require("../controller/getStudentById.controller");

function getStudentByIdRoute(app) {
  app.get("/api/student/id", getStudentById);
}

module.exports = getStudentByIdRoute;
