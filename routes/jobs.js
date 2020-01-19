const router = require('express').Router();
const { findJobs } = require('../controllers/jobs');

router.route('/')
  .get(findJobs);

module.exports = router;