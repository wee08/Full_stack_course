const {
  getTeacher,
  createTeacher,
} = require("../controller/teacher.controller");
const teacherRoute = (app) => {
  app.get("/api/v1/teacher/get", getTeacher);
  app.get("/api/v1/teacher/get/:id", getTeacher);

  app.post("/api/v1/teacher/create", createTeacher);
};

module.exports = teacherRoute;
