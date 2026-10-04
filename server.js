const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'express')));

app.listen(port, '127.0.0.1', () => {
  console.log(`Server listening at http://localhost:${port}`);
});