const express = require("express");

const dotenv = require("dotenv");
dotenv.config({ path: "./src/config/config.env" });

const db = require("./src/config/db");
// const { syncTables } = require("./src/utils/db");
const allowCrossDomain = require("./src/utils/cors");

db.authenticate()
  .then(() => {
    console.log("DB connected");

    // return syncTables();
  })
  // .then(() => console.log("Tabeles Synced"))
  .catch((err) => console.log("Error: " + err));

const server = express();
const PORT = process.env.PORT || 8000;

server.use(allowCrossDomain);

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get("/", (_, res) => {
  res.send("root page");
});

// routes
const jobs = require("./src/routes/jobs");
server.use("/api/v1/jobs", jobs);

if (process.env.NODE_ENV !== "test")
  server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
