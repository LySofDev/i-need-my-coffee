const express = require('express');
const { err404 } = require('./errors');
const app = express();

// Confirm server is running
app.get("/status", (req, res) => {
  res.status(200).json({});
});

app.use(err404);

module.exports = app;
