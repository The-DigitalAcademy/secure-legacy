// Import necessary modules and dependencies
const { DataTypes } = require('sequelize');
const sequelize = require('../Utils/database');

// Define the 'User' model using Sequelize
const User = sequelize.define('User', {
  // Define the 'id' column as an auto-incrementing integer primary key
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  // Define the 'firstName' column as a non-null string
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Define the 'lastName' column as a non-null string
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Define the 'email' column as a non-null and unique string
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // Define the 'password' column as a non-null string
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Export the 'User' model for use in other modules
module.exports = User;
