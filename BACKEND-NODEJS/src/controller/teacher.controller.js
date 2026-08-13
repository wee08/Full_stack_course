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

module.exports = getTeacher;
