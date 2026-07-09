const express = require("express");

const getAllStudentRoute = require("./src/router/getAllStudent.route");
const getStudentByIdRoute = require("./src/router/getStudentById.route");
const createStudentRoute = require("./src/router/createStudent.route");
const updateStudentRoute = require("./src/router/updateStudent.route");
const deleteStudentRoute = require("./src/router/deleteStudent.route");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Home page");
});

getAllStudentRoute(app);
getStudentByIdRoute(app);
createStudentRoute(app);
updateStudentRoute(app);
deleteStudentRoute(app);
app.listen(PORT, () => {
  console.log(`local host: http://localhost:${PORT}`);
});
