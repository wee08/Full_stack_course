const listStudent = require("../data/students");

function getStudentById(req, res) {
  const student = [];
  const id = req.query.id;
  listStudent.map((std, idx) => {
    if (std.id == id) {
      student.push(listStudent[idx]);
    }
  });
  res.send({
    student: student,
  });
}
module.exports = getStudentById;
