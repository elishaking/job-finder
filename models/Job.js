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

module.exports = Job;
