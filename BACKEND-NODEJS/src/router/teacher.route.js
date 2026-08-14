const {
  getTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} = require("../controller/teacher.controller");
const teacherRoute = (app) => {
  app.get("/api/v1/teacher/get", getTeacher);
  app.get("/api/v1/teacher/get/:id", getTeacher);

  app.post("/api/v1/teacher/create", createTeacher);
  app.put("/api/v1/teacher/update/:id", updateTeacher);
  app.delete("/api/v1/teacher/delete/:id", deleteTeacher);
};

module.exports = teacherRoute;
