const dbCtx = require('../database/mongo-db.js');
const mongooseCtx = require('../database/mongoose');
const { Room } = require('../model/schema');
const collectionName = 'rooms';

exports.createRoom = async (room) => {
    const rs = await dbCtx.insertOne(collectionName, room);
    return rs;
}

exports.getAll = async () => {
    const rs = await dbCtx.find(collectionName, {}, { name: true });
    return rs;
}

exports.isExists = async (roomName) => {
    const rs = await dbCtx.isExists(collectionName, { name: roomName });
    return rs;
}

exports.getRoomByUser = async (username) => {
    const rs = await mongooseCtx.find(Room, { user: username }, { "_id": 1 });
    return rs;
}