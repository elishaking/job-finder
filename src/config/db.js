const { Sequelize } = require("sequelize");

const db =
  process.env.NODE_ENV === "development"
    ? new Sequelize(process.env.DB_NAME, "postgres", process.env.DB_PASSWORD, {
        host: "localhost",
        dialect: "postgres",
      })
    : new Sequelize(process.env.DATABASE_URL, {
        ssl: true,
      });

module.exports = db;
