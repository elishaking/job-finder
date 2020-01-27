const Sequelize = require('sequelize');
const db = require('../config/db');

const Job = db.define('job', {
  title: {
    type: Sequelize.STRING
  },
  technologies: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  contactEmail: {
    type: Sequelize.STRING
  }
});

if (process.env.NODE_ENV === 'test') {
  const SequelizeMock = require('sequelize-mock');
  const dbMock = new SequelizeMock();

  const JobMock = dbMock.define('job', {
    title: 'React',
    technologies: "React, MongoDB",
    budget: 200000,
    description: 'Build great projects',
    contactEmail: 'mail@mail.com'
  });

  module.exports = JobMock;
}
else
  module.exports = Job;
