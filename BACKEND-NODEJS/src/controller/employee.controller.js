var db = require("../config/config");

const getemployee = async (req, res) => {
  var sql = `
SELECT * FROM employee
WHERE EmpCode = 'Emp01'
  `;

  try {
    const [result] = await db.query(sql);
    res.send({ employee: result });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Failed to fetch employees" });
  }
};
const createEmployee = async (req, res) => {
  const sql = `
        INSERT INTO employee (EmpCode, EmpName, Gender, PositionID, DepartmentID, OfficeID, DivisionID, BranchID, remark) VALUES ('A20', 'Dara', 'M', 'P01', 'D10', 'of_001', 'Div_010', 'Branch_01', '12')`;

  let result = await db.query(sql);
  res.send({
    message: "insert successs",
  });
};
module.exports = { getemployee, createEmployee };
