const Job = require("../models/Job");

const syncTables = async () => {
  await Job.sync();
};

module.exports = { syncTables };
