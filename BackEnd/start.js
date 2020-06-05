const app = require('./server');
const socketHandler = require('./src/socket/socket-handler');


server = app.listen(689, function () {
    console.log('Server running ...');
});
socketHandler.registerSocket(server);