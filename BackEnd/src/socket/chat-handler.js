const ChatHandler = function (socket, io) {
    this.socket = socket;
    this.io = io;
    this.cache = null;

    this.handlers = {
        username: username.bind(this),
        disconnect: disconnect.bind(this),
        chat_message: chat_message.bind(this)
    };
}

function initCache(cache) {
    if (cache == null) {
        cache = Math.random();        
    } 
    console.log('Cache: ', cache);
    return cache;
}

function username(username) {
    this.socket.username = username;   
    this.io.to(this.socket.room).emit('is_online', '🔵' + this.socket.username);
}

function disconnect(username) {
    this.socket.username = username;
    this.io.to(this.socket.room).emit('is_offline', '🔴' + this.socket.username);
}

function chat_message(msg) {
    this.io.to(this.socket.room).emit('chat_message', { username: this.socket.username, message: msg});
}

module.exports = ChatHandler;
