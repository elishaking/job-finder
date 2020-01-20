const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Job = require('../models/Job');
const ResponseUtil = require('../utils/response');
const { validateJobInput } = require('../validation/jobs');

/**
 * @description GET all jobs from database
 * @returns {Promise<{success: boolean, statusCode: number, message: string, data?: any}>}
 */
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

const createJob = (jobData) => new Promise((resolve) => {
  const { isValid, errors } = validateJobInput(jobData);

  if (!isValid)
    resolve(ResponseUtil.createResponse(
      false,
      400,
      "Wrong input",
      errors
    ));

  Job.create(jobData)
    .then((job) => {
      resolve(ResponseUtil.createResponse(
        true,
        201,
        "Job Created",
        job
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
  findJobs,
  createJob
};