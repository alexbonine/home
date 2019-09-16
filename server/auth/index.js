const passport = require('passport');
const yahooFantasy = require('./yahooFantasy');

const auth = ({ server, ...rest }) => {
  server.use(passport.initialize());
  server.use(passport.session());
  yahooFantasy({ passport, server, ...rest });
};

module.exports = auth;
