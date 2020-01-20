const router = require('express').Router();
const { getJobs, addJob, searchForJobs } = require('../controllers/jobs');

router.route('/')
  .get(getJobs)
  .post(addJob);

router.route('/search')
  .get(searchForJobs);

module.exports = router;