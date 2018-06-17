const express = require('express');
const { err404, err401, err403 } = require('./errors');
const auth = require('./auth');
const app = express();

// Setup Google One-Click authentication
auth(app);

// Validate that the server is running.
app.get('/status', (req, res) => {
  res.status(200).json({});
});

// Common error messages
app.get('/errors/401', err401);
app.get('/errors/403', err403);
app.use(err404);

module.exports = app;
