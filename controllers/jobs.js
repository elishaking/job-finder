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

module.exports = {
  findJobs
};