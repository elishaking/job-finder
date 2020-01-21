const { Sequelize } = require('sequelize');

const db = new Sequelize(
  process.env.DB_TEST_NAME,
  'postgres',
  process.env.DB_TEST_PASSWORD,
  {
    host: 'localhost',
    dialect: 'postgres'
  }
);

const connect = () => new Promise((resolve, reject) => {
  db.authenticate()
    .then(() => {
      console.log('Test DB connected');
      resolve();
    })
    .catch((err) => {
      console.log('Error: ' + err);
      reject(err);
    });
});

const close = () => db.close();

module.exports = { connect, close };