const Sequelize = require('sequelize');
const db = process.env.NODE_ENV === 'development' ? require('../config/db') : require('../../test/config/db').sequelize;

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
