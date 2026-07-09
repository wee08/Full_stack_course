const listStudent = require("../data/students");

function getStudentById(req, res) {
  res.send("Get student by id");
}
module.exports = getStudentById;
