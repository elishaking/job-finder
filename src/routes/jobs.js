const router = require("express").Router();
const {
  getJobs,
  getJobsOnline,
  addJob,
  searchForJobs,
} = require("../controllers/jobs");

router.route("/").get(getJobs).post(addJob);

router.route("/online").get(getJobsOnline);
router.route("/online/:searchQuery").get(getJobsOnline);

router.route("/search").get(searchForJobs);

module.exports = router;
