const { Sequelize } = require('sequelize');

// console.log(process.env.DB_NAME,
//   'postgres',
//   process.env.DB_PASSWORD);
const sequelize = process.env.NODE_ENV !== 'CI' ? new Sequelize(
  process.env.DB_NAME,
  'postgres',
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
) : new Sequelize(
  process.env.CI_DB_NAME,
  process.env.CI_DB_USER,
  process.env.CI_DB_PASSWORD,
  {
    host: process.env.CI_DB_HOST,
    dialect: 'mysql'
  }
);

const connect = () => sequelize.authenticate();
// new Promise((resolve, reject) => {
//   db.authenticate()
//     .then(() => {
//       console.log('Test DB connected');
//       resolve();
//     })
//     .catch((err) => {
//       console.log('Error: ' + err);
//       reject(err);
//     });
// });

const close = () => sequelize.close();

module.exports = { sequelize, connect, close };