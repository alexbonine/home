const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const next = require('next');
// const compression = require('compression');
// const mongoSessionStore = require('connect-mongo');
// const mongoose = require('mongoose');
// const helmet = require('helmet');
const api = require('./api');
const auth = require('./auth');

require('dotenv').config();

const portArgIndex = [...process.argv].findIndex((arg) => arg === '-p') + 1;
const port = parseInt(process.argv[portArgIndex] || process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const rootUrl = dev ? `http://localhost:${port}` : 'https://alexbonine.herokuapp.com'; // todo update when released to alexbonine.com

app.prepare().then(() => {
  const server = express();
  server.use(cookieParser());
  server.use(bodyParser.urlencoded({ extended: false }));
  // app.use(express.methodOverride());
  const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
      httpOnly: true,
      maxAge: 14 * 24 * 60 * 60 * 1000, // expires in 14 days
    },
    resave: false,
    saveUninitialized: true,
  };

  if (!dev) {
    server.set('trust proxy', 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
  }

  server.use(session(sess));

  // const MongoStore = mongoSessionStore(session);
  // const sess = {
  //   name: 'builderbook.sid',
  //   secret: process.env.SESSION_SECRET,
  //   store: new MongoStore({
  //     mongooseConnection: mongoose.connection,
  //     ttl: 14 * 24 * 60 * 60, // save session 14 days
  //   }),
  //   resave: false,
  //   saveUninitialized: false,
  //   cookie: {
  //     httpOnly: true,
  //     maxAge: 14 * 24 * 60 * 60 * 1000, // expires in 14 days
  //   },
  // };

  // if (!dev) {
  //   server.set('trust proxy', 1); // trust first proxy
  //   sess.cookie.secure = true; // serve secure cookies
  // }

  // server.use(session(sess));

  api(server);
  auth({ rootUrl, server });

  // sitemapAndRobots({ server });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.log(`> Listnening on http://localhost:${port}`); // eslint-disable-line no-console
  });
});
