const { DataTypes } = require("sequelize");
const sequelize = require("../Utils/database");

const Survey = sequelize.define("Surveys", {
  userID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  surveyQuestion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Survey;