const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const searchJobs = (req, res) => {
  const { term } = req.query;

  Job.findAll({
    where: {
      technologies: {
        [Op.like]: `%${term}%`
      }
    }
  })
    .then((jobs) => ResponseUtil.sendResponse(
      res,
      ResponseUtil.createResponse(
        true,
        200,
        jobs.length === 0 ? "No Result found" : "Search Results found",
        jobs
      )
    ))
    .catch((err) => {
      console.log(err);

      ResponseUtil.sendResponse(res,
        ResponseUtil.createResponse(
          false,
          500,
          "Server Error"
        )
      );
    });
};

module.exports = {
  findJobs,
  addJob,
  searchJobs
};