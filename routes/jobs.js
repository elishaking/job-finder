const router = require('express').Router();
const { findJobs, addJob } = require('../controllers/jobs');

router.route('/')
  .get(findJobs)
  .post(addJob);

module.exports = router;