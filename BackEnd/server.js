var express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./src/route/auth-router.js');
const userRouter = require('./src/route/user-router.js');
const process = require('process');
const middleWare = require('./middle-ware/middle-ware.js');

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
  rp.sendFile('E:\\WorkSpace\\NodeJs\\ChatNodeJs\\ChatNode\\BackEnd\\index.html');
})
// var authRouter = require('./src/route/auth-router.js');
app.use('/auth', authRouter);
// app.use('/user', middleWare.validateToken, userRouter);
app.use('/user', userRouter);


server = app.listen(689, function () {
  console.log('Server running ...');
});


const io = require('socket.io')(server);
io.sockets.on('connection', function (socket) {
  socket.on('username', function (username) {
    socket.username = username;
    io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
  })

  socket.on('disconnect', function (username) {
    socket.username = username;
    io.emit('is_online', '🔴 <i>' + socket.username + ' join the chat..</i>');
  })

  socket.on('chat_message', function (msg) {
    io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + msg);
  })
})

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
  .on('uncaughtException', err => {
    console.error(err, 'Uncaught Exception thrown');
    process.exit(1);
  });