const listStudent = require("../data/students");
function findStudent() {
  const student = [];
  const inputId = 2;
  listStudent.map((std, idx) => {
    if (std.id === inputId) {
      student.push(listStudent[idx]);
    }
  });
  return student;
}
function getStudentById(req, res) {
  res.send({
    student: findStudent(),
  });
}
module.exports = getStudentById;
