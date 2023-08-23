const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dblegacy', 'dblegacy_user', 'dEDpEQAd8CXO2rPDCeYLgSQSpjbYz8of', {
  host: 'dpg-cit24l5gkuvgs6sei740-a.oregon-postgres.render.com',
  port: 5432,
  dialect: 'postgres',
    dialectOptions: {
    ssl: true, // Enable SSL/TLS
    
  },
});

module.exports = sequelize;

