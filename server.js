const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
// const path = require('path');

dotenv.config({ path: './config/config.env' });

db.authenticate()
  .then(() => console.log('DB connected'))
  .catch((err) => console.log('Error: ' + err));

const server = express();
const PORT = process.env.PORT || 8000;

server.get('/', (_, res) => {
  res.send('root page');
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
