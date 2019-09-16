const OAuth2Strategy = require('passport-oauth2').Strategy;
const User = require('../models/User');

function auth({ rootUrl, passport, server }) {
  const verify = async (accessToken, refreshToken, yahooProfile, verified) => {
    try {
      const user = await User.findOrCreate({
        yahooId: yahooProfile.guid,
        yahooToken: { accessToken, refreshToken },
      });
      verified(false, user);
    } catch (error) {
      verified(error);
      console.log(error); // eslint-disable-line
    }
  };

  const strategy = new OAuth2Strategy(
    {
      authorizationURL: 'https://api.login.yahoo.com/oauth2/request_auth',
      tokenURL: 'https://api.login.yahoo.com/oauth2/get_token',
      clientID: process.env.YAHOOFANTASY_CLIENTID,
      clientSecret: process.env.YAHOOFANTASY_SECRET,
      callbackURL: `${rootUrl}/auth/yahoo/callback`,
    },
    verify
  );

  // move to deserializeUser?
  strategy.userProfile = async (accessToken, done) => {
    await User.getYahooId(accessToken, done);
  };

  passport.use(strategy);

  passport.serializeUser((user, done) => {
    done(null, user.userId);
  });

  passport.deserializeUser((userId, done) => {
    User.findById(userId, User.publicFields(), done);
  });

  server.get('/auth/yahoo', passport.authenticate('oauth2'));
  //   server.get('/auth/google', (req, res, next) => {
  //     const options = {
  //       scope: ['profile', 'email'],
  //       prompt: 'select_account',
  //     };
  //     if (req.query && req.query.redirectUrl && req.query.redirectUrl.startsWith('/')) {
  //       req.session.finalUrl = req.query.redirectUrl;
  //     } else {
  //       req.session.finalUrl = null;
  //     }
  //     passport.authenticate('google', options)(req, res, next);
  //   });

  server.get(
    '/auth/yahoo/callback',
    passport.authenticate('oauth2', { failureRedirect: '/fantasyfootball' }), // /login?
    (req, res) => {
      res.redirect('/fantasyfootball');
    }
  );
  //   server.get(
  //     '/oauth2callback',
  //     passport.authenticate('google', {
  //       failureRedirect: '/login',
  //     }),
  //     (req, res) => {
  //       if (req.user && req.user.isAdmin) {
  //         res.redirect('/admin');
  //       } else if (req.session.finalUrl) {
  //         res.redirect(req.session.finalUrl);
  //       } else {
  //         res.redirect('/my-books');
  //       }
  //     },
  //   );

  server.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/fantasyfootball');
  });
}

// app.get('/account', ensureAuthenticated, function(req, res){
//   res.render('account', { user: req.user });
// });
// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) { return next(); }
//   res.redirect('/')
// }

module.exports = auth;
