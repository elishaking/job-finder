const express = require('express');
const Job = require('../models/Job');

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
          success: true
        });
    })
    .catch((err) => console.log(err));
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const addJob = (req, res) => {
  const data = req.body;

  // const {title, technologies, budget, description, contactEmail} = data;
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