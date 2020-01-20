const express = require('express');

const ResponseUtil = require('../utils/response');
const { findJobs, createJob, searchJobs } = require('../services/jobs');

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const getJobs = (req, res) => {
  findJobs()
    .then((resData) => ResponseUtil.sendResponse(
      res,
      resData
    ));
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const addJob = (req, res) => {
  const data = req.body;

  createJob(data)
    .then((resData) => ResponseUtil.sendResponse(
      res,
      resData
    ));
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
const searchForJobs = (req, res) => {
  const { term } = req.query;

  searchJobs(term)
    .then((resData) => ResponseUtil.sendResponse(
      res,
      resData
    ));
};

module.exports = {
  getJobs,
  addJob,
  searchForJobs
};