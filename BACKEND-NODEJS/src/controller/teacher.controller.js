const Teacher = require("../models/teacher");

const getTeacher = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      const result = await Teacher.findAll();
      return res.send({ result });
    }

    const result = await Teacher.findByPk(id);

    if (!result) {
      return res.status(404).send({ error: "Teacher not found" });
    }

    return res.send({ teacher: result });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = getTeacher;
