const dbCtx = require('../database/mongo-db.js');

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