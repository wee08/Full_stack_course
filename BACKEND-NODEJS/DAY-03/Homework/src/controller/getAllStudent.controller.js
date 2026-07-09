const listStudent = require("../data/students");

function getAllStudent(req, res) {
  res.send({
    students: listStudent,
  });
}
module.exports = getAllStudent;
