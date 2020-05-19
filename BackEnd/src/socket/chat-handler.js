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
    this.io.emit('is_online', '🔵 <i>' + this.socket.username + ' join the chat..</i>');
}

function disconnect(username) {
    this.socket.username = username;
    this.io.emit('is_online', '🔴 <i>' + this.socket.username + ' join the chat..</i>');
}

function chat_message(msg) {
    this.io.emit('chat_message', '<strong>' + this.socket.username + '</strong>: ' + msg);
}

module.exports = ChatHandler;
