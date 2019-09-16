const fantasyFootballApi = require('./fantasyFootball');

function api(server) {
  server.use('/api/fantasyfootball', fantasyFootballApi);
}

module.exports = api;
