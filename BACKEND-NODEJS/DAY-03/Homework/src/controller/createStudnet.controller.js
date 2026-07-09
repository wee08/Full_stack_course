const listStudent = require("../data/students");
function createStudent(req, res) {
  const newStudnet = [
    {
      name: "Leap heng",
      id: listStudent.length + 1,
      gender: "M",
      class: "12 A",
      "date of birth": "02-Mar-2000",
    },
  ];

  listStudent.push(newStudnet);
  res.send({
    status: "added sucessfuly",
    student: listStudent,
  });
}
module.exports = createStudent;
