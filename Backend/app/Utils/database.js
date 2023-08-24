// Import necessary module for Sequelize and set up a database connection
const { Sequelize } = require('sequelize');

// Create a Sequelize instance and configure the database connection
const sequelize = new Sequelize('dblegacy', 'dblegacy_user', 'dEDpEQAd8CXO2rPDCeYLgSQSpjbYz8of', {
  host: 'dpg-cit24l5gkuvgs6sei740-a.oregon-postgres.render.com', // Database host
  port: 5432, // Database port
  dialect: 'postgres', // Database dialect (PostgreSQL)
  dialectOptions: {
    ssl: true, // Enable SSL/TLS for secure connection
  },
});

// Export the configured Sequelize instance for use in other modules
module.exports = sequelize;
