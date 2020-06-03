const roomRepo = require('../repo/room-repo');
const ValidationError = require('../utilities/app-error.js');

exports.createRoom = async (room) => {
    if (this.isExists(room)) {
        throw new ValidationError('This room name is existed');
    }
    return await roomRepo.createRoom(room);
}

exports.getAll = async () => {
    return await roomRepo.getAll();
}

exports.isExists = async (roomName) => {
    return await roomRepo.isExists(roomName);
}