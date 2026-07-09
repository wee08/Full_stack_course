const getStudentById = require("../controller/getStudentById.controller");

function getStudentByIdRoute(app) {
  app.get(`/api/student/id/2`, getStudentById);
}

module.exports = getStudentByIdRoute;
