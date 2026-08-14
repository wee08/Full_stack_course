const sequelize = require("../config/sequelizeConfig");
const Teacher = require("../models/teacher");
const { missing } = require("../helper/validate");
const getTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      const result = await Teacher.findAll();
      return res.send({
        result,
      });
    }
    const teacher = await Teacher.findByPk(id);
    if (!teacher) {
      return res.status(404).send({
        errro: "Teacher not found",
      });
    }
    return res.send({
      teacher,
    });
  } catch (error) {
    res.send({ error: error.message });
  }
};
const createTeacher = async (req, res) => {
  try {
    const field = ({
      first_name,
      last_name,
      gender,
      date_of_birth,
      email,
      phone,
      address,
      hire_date,
      specialization,
      salary,
      status,
    } = req.body);

    const newTeacher = {
      first_name,
      last_name,
      gender,
      date_of_birth,
      email,
      phone,
      address,
      hire_date,
      specialization,
      salary,
      status,
    };
    await missing(req, res, field);
    const result = await Teacher.create(newTeacher);
    res.status(201).json(result);
  } catch (error) {
    return res.send({
      error,
    });
  }
};
const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findByPk(id);
    if (!teacher) {
      return res.status(404).send({
        error: "Teacher not found",
      });
    }
    const field = ({
      first_name,
      last_name,
      gender,
      date_of_birth,
      email,
      phone,
      address,
      hire_date,
      specialization,
      salary,
      status,
    } = req.body);
    await missing(req, res, id);
    await missing(req, res, field);

    const udpatedTeacher = await teacher.update(field);
    res.send({
      udpatedTeacher,
    });
  } catch (error) {
    return res.send({
      error,
    });
  }
};

module.exports = { getTeacher, createTeacher, updateTeacher };
