const listStudent = require("../data/students");
function getStudentById(req, res) {
  const student = [];
  const inputId = 2;
  listStudent.map((std, idx) => {
    if (std.id === inputId) {
      student.push(listStudent[idx]);
    }
  });
  res.send({
    student: student,
  });
}
module.exports = getStudentById;
