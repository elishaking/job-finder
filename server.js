const express = require('express');

const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const db = require('./config/db');

db.authenticate()
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('Error: ' + err));

const server = express();
const PORT = process.env.PORT || 8000;

server.get('/', (_, res) => {
  res.send('root page');
});

// routes
const jobs = require('./routes/jobs');
server.use('/api/v1/jobs', jobs);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
