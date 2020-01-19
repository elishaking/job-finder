const router = require('express').Router();

router.route('/')
  .get((_, res) => {
    res.send('Jobs');
  });

module.exports = router;