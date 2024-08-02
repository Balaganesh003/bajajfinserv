const express = require('express');
const bodyParser = require('body-parser');
const bajajRouter = require('./routes/bajaj.js');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/bajaj', bajajRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;