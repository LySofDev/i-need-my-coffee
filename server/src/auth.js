if (process.env.NODE_ENV !== 'production') require('dotenv').load();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

module.exports = function(app) {
  // Configure cookies for session
  app.use(cookieParser());
  app.use(cookieSession({
    name: 'incf-session',
    keys: [ process.env.COOKIE_SECRET ]
  }));

  // Configure Passport and Google
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

  // User serialization
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  // Initialize the authentication strategy
  app.use(passport.initialize());

  // Google One-Click authentication
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/plus.login']
  }));

  // Authentication Callback
  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/errors/401' }),
    function(req, res) {
      req.session.token = req.user.token
      res.redirect('/');
    }
  );

  // Logout callback
  app.get('/auth/logout', (req, res) => {
    res.cookie('token', '');
    res.json({ data: 'Session cleared.' });
  });
}
