const express = require('express');
const Job = require('../models/Job');
const ResponseUtil = require('../utils/response');
const { validateJobInput } = require('../validation/jobs');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const findJobs = (req, res) => {
  Job.findAll()
    .then((jobs) => {
      console.log(jobs);
      res.status(200)
        .json({
          success: true,
          jobs
        });
    })
    .catch((err) => {
      console.log(err);

      res.status(500)
        .json({
          success: false
        });
    });
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const addJob = (req, res) => {
  const data = req.body;

  // const {title, technologies, budget, description, contactEmail} = data;
  const { isValid, errors } = validateJobInput(data);

  if (!isValid)
    return ResponseUtil.sendResponse(
      res,
      ResponseUtil.createResponse(
        false,
        400,
        "Wrong input",
        errors
      )
    );

  Job.create(data)
    .then((job) => {
      res.status(201)
        .json({
          success: true,
          job
        });
    })
    .catch((err) => {
      console.log(err);

      res.status(500)
        .json({
          success: false
        });
    });
};

module.exports = {
  findJobs,
  addJob
};