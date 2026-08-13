const getTeacher = require("../controller/teacher.controller");

const teacherRoute = (app) => {
  app.get("/api/v1/teacher/get", getTeacher);
  app.get("/api/v1/teacher/get/:id", getTeacher);
};

module.exports = teacherRoute;
