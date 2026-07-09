const listStudent = require("../data/students");

function deleteStudent(req, res) {
  const inputId = 1;
  listStudent.map((std, idx) => {
    if (std.id === inputId) {
      listStudent.splice(listStudent[idx]);
    }
  });
  res.send({
    student: "delete",
  });
}
module.exports = deleteStudent;
