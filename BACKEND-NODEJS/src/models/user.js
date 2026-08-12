const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelizeConfig"); // adjust path to your sequelize instance

const user = sequelize.define(
  "employee",
  {
    EmpCode: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    EmpName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Gender: {
      type: DataTypes.STRING(1),
      allowNull: true,
    },
    PositionID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DepartmentID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    OfficeID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DivisionID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    BranchID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    remark: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    other: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "employee", // change to match your actual table name in the DB
    timestamps: false, // set true if your table has createdAt/updatedAt columns
  },
);

module.exports = user;
