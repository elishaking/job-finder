const { Sequelize } = require('sequelize');

const db = new Sequelize(
  process.env.DB_NAME,
  'postgres',
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

module.exports = db;