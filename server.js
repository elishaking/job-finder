const express = require('express');

const dotenv = require('dotenv');
dotenv.config({ path: './src/config/config.env' });

const db = require('./src/config/db');

db.authenticate()
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('Error: ' + err));

const server = express();
const PORT = process.env.PORT || 8000;

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get('/', (_, res) => {
  res.send('root page');
});

// routes
const jobs = require('./src/routes/jobs');
server.use('/api/v1/jobs', jobs);

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
