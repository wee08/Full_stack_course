const express = require("express");

const getAllStudentRoute = require("./src/router/getAllStudent.route");
const getStudentByIdRoute = require("./src/router/getStudentById.route");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Home page");
});

getAllStudentRoute(app);
getStudentByIdRoute(app);

app.listen(PORT, () => {
  console.log(`local host: http://localhost:${PORT}`);
});
