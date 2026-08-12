const db = require("../config/config");
const dotenv = require("dotenv");

const Employee = require("../models/user");
const { missing, checkEmpExistend } = require("../helper/validate");
const { sendMessageToTelegram } = require("../helper/telegramConfig");
const { sendEmail } = require("../helper/mail_config");
dotenv.config();

const fetchAllEmployee = async () => {
  const sql = `SELECT * FROM employee WHERE 1`;
  const result = await db.query(sql);
  if (result === "" || result.length == 0 || result === undefined) {
    res.status(404).send({ error: "employee list is empty!" });
    return;
  }
  return result[0];
};

const getAllEmployee = async (req, res) => {
  const employee = await fetchAllEmployee();
  try {
    res.send({
      employee,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "failed to fetch attemp!" });
  }
};

const createEmployee = async (req, res) => {
  const field = ({
    empCode,
    empName,
    gender,
    positionID,
    departmentID,
    officeID,
    divisionID,
    branchID,
    remark,
  } = req.body);

  // validate missing variable
  missing(req, res, field);

  const sql = `
        INSERT INTO employee (EmpCode, EmpName, Gender, PositionID, DepartmentID, OfficeID, DivisionID, BranchID, remark)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
  await db.query(sql, [
    empCode,
    empName,
    gender,
    positionID,
    departmentID,
    officeID,
    divisionID,
    branchID,
    remark,
  ]);
  const employee = await fetchAllEmployee();
  res.send({
    status: "success",
    employee,
  });
};

const updateEmployee = async (req, res) => {
  const { empCode } = req.params;
  const field = ({
    empName,
    gender,
    positionID,
    departmentID,
    officeID,
    divisionID,
    branchID,
    remark,
  } = req.body);
  missing(req, res, field);
  const employeeBefore = await fetchAllEmployee();
  await checkEmpExistend(req, res, empCode, employeeBefore);

  const sql = `
    UPDATE employee
    SET EmpName = ?,Gender= ?,PositionID=?,DepartmentID=?,OfficeID=?,DivisionID=?,BranchID=?,remark=? 
    WHERE EmpCode = ?`;
  await db.query(sql, [
    empName,
    gender,
    positionID,
    departmentID,
    officeID,
    divisionID,
    branchID,
    remark,
    empCode,
  ]);
  const employee = await fetchAllEmployee();
  try {
    if (!empCode) {
      res.status(404).send({ error: "empCode is required!" });
      return;
    }
    res.send({
      update: "sucess",
      employee,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "failed to fetch attemp!" });
  }
};

const deleteEmployee = async (req, res) => {
  const { empCode } = req.body;
  const sql = `DELETE FROM employee WHERE EmpCode = ?`;
  try {
    if (!empCode) {
      res.status(404).send({ error: "empCode is required" });
      return;
    }
    // check EmpCode is exist or not
    const employeeBefore = await fetchAllEmployee();
    await checkEmpExistend(req, res, empCode, employeeBefore);

    // display all data after delete
    await db.query(sql, [empCode]);
    const employee = await fetchAllEmployee();

    res.send({
      delete: "success",
      employee,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "failed to fetch attemp!" });
  }
};

const sendMyEmail = async (req, res) => {
  await sendEmail(req, res);
};

const otpStore = {};
const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const sql = `SELECT TABLE `;
  } catch (error) {
    console.error(error);
  }
};
const getUser = async (req, res) => {
  try {
    const users = await Employee.findAll();
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch employees." });
  }
};
module.exports = {
  getAllEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  sendMessageToTelegram,
  sendMyEmail,
  sendOTP,
  getUser,
};
