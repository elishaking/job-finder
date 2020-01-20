const router = require('express').Router();
const { findJobs, addJob, searchJobs } = require('../controllers/jobs');

router.route('/')
  .get(findJobs)
  .post(addJob);

router.route('/search')
  .get(searchJobs);

module.exports = router;