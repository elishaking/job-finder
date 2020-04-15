const Sequelize = require("sequelize");
const db = require("../config/db");

const Job = db.define("job", {
  title: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  technologies: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  description: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  budget: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  contactEmail: {
    allowNull: false,
    type: Sequelize.STRING,
  },
});

if (process.env.NODE_ENV === "test") {
  const SequelizeMock = require("sequelize-mock");
  const dbMock = new SequelizeMock();

  const JobMock = dbMock.define("job", {
    title: "React",
    technologies: "React, MongoDB",
    budget: 200000,
    description: "Build great projects",
    contactEmail: "mail@mail.com",
  });

  module.exports = JobMock;
} else module.exports = Job;
