const express = require('express');
const { err404 } = require('./errors');
const app = express();

app.use(err404);

module.exports = app;
