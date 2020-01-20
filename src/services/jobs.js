const Sequelize = require('sequelize');

const Job = require('../models/Job');
const ResponseUtil = require('../utils/response');

const findJobs = () => new Promise((resolve) => {
  Job.findAll()
    .then((jobs) => {
      resolve(ResponseUtil.createResponse(
        true,
        200,
        jobs.length === 0 ? "No Jobs found" : "Jobs found",
        jobs
      ));
    })
    .catch((err) => {
      console.log(err);

      resolve(ResponseUtil.createResponse(
        false,
        500,
        "Server Error"
      ));
    });
});

module.exports = {
  findJobs
};