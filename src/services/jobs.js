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

/**
 * Creates a new job in the database
 * @param {{title: string, technologies: string, budget: number, description: string, contactEmail: string}} jobData 
 * @returns {Promise<{success: boolean, statusCode: number, message: string, data?: any}>}
 */
const createJob = (jobData) => new Promise((resolve) => {
  const { isValid, errors } = validateJobInput(jobData);

  // const {title, technologies, budget, description, contactEmail} = jobData;

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

/**
 * Searches for jobs in the database
 * @param {string} query 
 * @returns {Promise<{success: boolean, statusCode: number, message: string, data?: any}>}
 */
const searchJobs = (query) => new Promise((resolve) => {
  let camelCaseTerm = query.toLowerCase().split('');
  camelCaseTerm[0] = camelCaseTerm[0].toUpperCase();

  Job.findAll({
    where: {
      [Op.or]: [
        {
          technologies: {
            [Op.like]: `%${query}%`
          }
        },
        {
          technologies: {
            [Op.like]: `%${query.toLowerCase()}%`
          }
        },
        {
          technologies: {
            [Op.like]: `%${query.toUpperCase()}%`
          }
        },
        {
          technologies: {
            [Op.like]: `%${camelCaseTerm.join('')}%`
          }
        },
      ]
    }
  })
    .then((jobs) => resolve(ResponseUtil.createResponse(
      true,
      200,
      jobs.length === 0 ? "No Result found" : "Search Results found",
      jobs
    )))
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
  createJob,
  searchJobs
};