var express = require('express');
const bodyParser = require('body-parser');
const process = require('process');
const cors = require('cors');
const { handleError } = require('./src/utilities/error-handler');
const { registerModule } = require('./src/route/module-router');

var app = express();
app.use(bodyParser.urlencoded({ // Middleware
  extended: true
}));
app.use(bodyParser.json());
// cor
app.use(cors({credentials: true, origin: true}));

registerModule(app);

// custom error handler
app.use(handleError);

process
  // .on('unhandledRejection', (reason, p) => {
  //   console.error(reason, 'Unhandled Rejection at Promise', p);
  // })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });

// module.exports = { server: app, ioServer: io};

module.exports = app;