if (process.env.NODE_ENV !== 'production') require('dotenv').load();

const {
  CLIENT_ID="FOO",
  CLIENT_SECRET="BAR"
} = process.env;

module.exports = function(passport) {

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: process.env.CALLBACK_URL
      },
      (token, refreshToken, profile, done) => done(null, { profile, token })
    )
  );

}
