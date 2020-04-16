const { Sequelize } = require("sequelize");

console.log(process.env.NODE_ENV);

const db =
  process.env.NODE_ENV === "production"
    ? new Sequelize(process.env.DATABASE_URL, {
        ssl: true,
      })
    : new Sequelize(process.env.DB_NAME, "postgres", process.env.DB_PASSWORD, {
        host: "localhost",
        dialect: "postgres",
      });
module.exports = db;
