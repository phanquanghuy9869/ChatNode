var express = require('express');
const bodyParser = require('body-parser');
const process = require('process');
const cors = require('cors');
const socketHandler = require('./src/socket/socket-handler');
const { handleError } = require('./src/utilities/error-handler');
const { registerModule } = require('./src/route/module-router');

var app = express();
app.use(bodyParser.urlencoded({ // Middleware
  extended: true
}));
app.use(bodyParser.json());
// custom error handler
app.use(handleError)
// cor
app.use(cors({credentials: true, origin: true}));
app.get('/', function (rq, rp) {
  rp.sendFile('E:\\WorkSpace\\NodeJs\\ChatNodeJs\\ChatNode\\BackEnd\\index.html');
})
registerModule(app);


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