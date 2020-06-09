
const chatHandler = require('./chat-handler');
const socketioJwt = require('socketio-jwt');
const Appconfig = require('../../config/config');

exports.registerSocket = function (server) {
    const io = require('socket.io')(server, {
        handlePreflightRequest: (req, res) => {
            const headers = {
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
                "Access-Control-Allow-Credentials": true
            };
            res.writeHead(200, headers);
            res.end();
        }
    });
    io.use(socketioJwt.authorize({
        secret: Appconfig.auth.secret,
        handshake: true,
        auth_header_required: true,
        callback: 15000,
    }));

    io.on('connection', function (socket) {
        console.log('hello!', socket.decoded_token);
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



