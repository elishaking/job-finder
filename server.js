const express = require('express');
const path = require('path');

const server = express();
const PORT = process.env.PORT || 8000;

server.get('/', (_, res) => {
  res.send('root page');
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
