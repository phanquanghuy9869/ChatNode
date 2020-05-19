var express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./src/route/auth-router.js');
const userRouter = require('./src/route/user-router.js');
const process = require('process');
const socketHandler = require('./src/socket/socket-handler');

var app = express();
app.use(bodyParser.urlencoded({ // Middleware
  extended: true
}));
app.use(bodyParser.json());

// custom error handler
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json({
    isSuccess: false,
    message: 'Unhandle error'
  })
})


app.get('/', function (rq, rp) {
  rp.sendFile('C:\\Workspace\\Nodejs\\Chat\\ChatNode\\BackEnd\\index.html');
})
// var authRouter = require('./src/route/auth-router.js');
app.use('/auth', authRouter);
// app.use('/user', middleWare.validateToken, userRouter);
app.use('/user', userRouter);


server = app.listen(689, function () {
  console.log('Server running ...');
});
socketHandler.registerSocket(server);

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });

// module.exports = { server: app, ioServer: io};