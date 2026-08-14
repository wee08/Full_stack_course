const {
  getTeacher,
  createTeacher,
  updateTeacher,
} = require("../controller/teacher.controller");
const teacherRoute = (app) => {
  app.get("/api/v1/teacher/get", getTeacher);
  app.get("/api/v1/teacher/get/:id", getTeacher);

  app.post("/api/v1/teacher/create", createTeacher);
  app.put("/api/v1/teacher/update/:id", updateTeacher);
};

module.exports = teacherRoute;
