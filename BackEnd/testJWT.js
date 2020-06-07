const mongoose = require('mongoose');
const config = require('./config/config');
const { Room } = require('./src/model/schema');

const run = async () => {
    await mongoose.connect('mongodb://localhost:27017/testChatNode');
    const rooms = [new Room({ name: 'Room 1', user: ['Huy', 'Phan'] }), new Room({ name: 'Room 2', user: ['Huy 2', 'Phan 2'] })];
    const inserted = await Room.insertMany(rooms);
    await mongoose.disconnect();
}
run();