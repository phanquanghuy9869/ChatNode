const roomRepo = require('../repo/room-repo');
const ValidationError = require('../utilities/app-error.js');

exports.createRoom = async (room) => {
    if (await this.isExists(room.name)) {
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

exports.getRoomByUser = async (username) => {
    return await roomRepo.getRoomByUser(username);
}