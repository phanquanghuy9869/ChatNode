
const chatHandler = require('./chat-handler');

exports.registerSocket = function (server) {
    const io = require('socket.io')(server);

    const nsp = io.of('/learning-namespace');
    nsp.on('connection', function(socket) {
        var eventHandlers = {
            chatHandler: new chatHandler(socket, nsp)
        }         

       for (const category in eventHandlers) {
            let handlers = eventHandlers[category].handlers;
            for (const event in handlers) {
                socket.on(event, handlers[event]);
            }
       }
    });

    const playingNsp = io.of('/playing-namespace');
    playingNsp.on('connection', function(socket) {
        var eventHandlers = {
            chatHandler: new chatHandler(socket, playingNsp)
        }         

       for (const category in eventHandlers) {
            let handlers = eventHandlers[category].handlers;
            for (const event in handlers) {
                socket.on(event, handlers[event]);
            }
       }
    });
}


// exports.registerSocket = function (server) {
//     const io = require('socket.io')(server);

//     io.sockets.on('connection', function (socket) {
//         var eventHandlers = {
//             chatHandler: new chatHandler(socket, io)
//         }         

//        for (const category in eventHandlers) {
//             let handlers = eventHandlers[category].handlers;
//             for (const event in handlers) {
//                 socket.on(event, handlers[event]);
//             }
//        }
//     });
// }

