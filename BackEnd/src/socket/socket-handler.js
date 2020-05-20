
const chatHandler = require('./chat-handler');

exports.registerSocket = function (server) {
    const io = require('socket.io')(server);

    io.on('connection', function (socket) {
        var eventHandlers = {
            chatHandler: new chatHandler(socket, io)
        }
        var random = getRandomInt(2, 3).toString();
        socket.join(random);
        socket.room = random;

        for (const category in eventHandlers) {
            let handlers = eventHandlers[category].handlers;
            for (const event in handlers) {
                socket.on(event, handlers[event]);
            }
        }
    });

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // exports.registerSocket = function (server) {
    //     const io = require('socket.io')(server);

    //     io.on('connection', function (socket) {
    //         var eventHandlers = {
    //             chatHandler: new chatHandler(socket, io)
    //         }

    //         for (const category in eventHandlers) {
    //             let handlers = eventHandlers[category].handlers;
    //             for (const event in handlers) {
    //                 socket.on(event, handlers[event]);
    //             }
    //         }
    //     });
    // }
    // const nsp = io.of('/learning-namespace');
    // nsp.on('connection', function(socket) {
    //     var eventHandlers = {
    //         chatHandler: new chatHandler(socket, nsp)
    //     }         

    //    for (const category in eventHandlers) {
    //         let handlers = eventHandlers[category].handlers;
    //         for (const event in handlers) {
    //             socket.on(event, handlers[event]);
    //         }
    //    }
    // });

    // const playingNsp = io.of('/playing-namespace');
    // playingNsp.on('connection', function(socket) {
    //     var eventHandlers = {
    //         chatHandler: new chatHandler(socket, playingNsp)
    //     }         

    //    for (const category in eventHandlers) {
    //         let handlers = eventHandlers[category].handlers;
    //         for (const event in handlers) {
    //             socket.on(event, handlers[event]);
    //         }
    //    }
    // });
}



