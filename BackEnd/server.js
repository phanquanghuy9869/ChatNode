var express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./src/route/auth-router.js');
const userRouter = require('./src/route/user-router.js');
const process = require('process');

var app = express();
app.use(bodyParser.urlencoded({ // Middleware
  extended: true
}));
app.use(bodyParser.json());

// var authRouter = require('./src/route/auth-router.js');
app.use('/auth', authRouter);
app.use('/user', userRouter);

// custom error handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json({
    isSuccess: false,
    message: 'Unhandle error'
  })
})

var server = app.listen(689, function () {
  console.log('Server running ...');
});

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });