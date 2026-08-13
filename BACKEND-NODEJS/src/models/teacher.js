const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelizeConfig");

const Teacher = sequelize.define(
  "Teacher",
  {
    teacher_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    gender: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },

    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },

    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },

    hire_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    specialization: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },

    salary: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },

    status: {
      type: DataTypes.ENUM("active", "inactive"),
      defaultValue: "active",
    },
  },
  {
    tableName: "teachers",
    timestamps: true,
  },
);

module.exports = Teacher;
