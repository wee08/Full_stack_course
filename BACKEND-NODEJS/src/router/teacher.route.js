const getTeacher = require("../controller/teacher.controller");
const teacherRoute = (app) => {
  app.get("/api/teacher/list", getTeacher);
};

module.exports = teacherRoute;
