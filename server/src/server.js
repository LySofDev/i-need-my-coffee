if (process.env.NODE_ENV !== 'production') require('dotenv').load();
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const { err404, err401, err403 } = require('./errors');

const app = express();
app.use(cookieParser());
app.use(cookieSession({
  name: 'incf-session',
  keys: [ process.env.COOKIE_SECRET ]
}));

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, {
      name: profile.displayName,
      token: accessToken
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(passport.initialize());

app.get('/auth/google', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login']
}));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    req.session.token = req.user.token
    res.redirect('/');
  }
);

app.get('/auth/logout', (req, res) => {
  res.cookie('token', '');
  res.json({ data: 'Session cleared.' });
});

app.get('/', (req, res) => {
  if (req.session.token) {
    res.cookie('token', req.session.token);
    res.json({ data: ['Cookie set.'] });
  } else {
    res.cookie('token', '');
    res.json({ data: 'session cookie not set'});
  }
});

app.get('/status', (req, res) => {
  res.status(200).json({});
});

app.get('/errors/401', err401);
app.get('/errors/403', err403);
app.use(err404);

module.exports = app;
