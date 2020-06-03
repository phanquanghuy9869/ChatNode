const roomService = require('../service/room-service');
const respond = require('../utilities/respond.js');

// https://stackoverflow.com/questions/51391080/handling-errors-in-express-async-middleware/51391081#51391081
exports.createRoom = async (rq, rp, next) => {
    try {
        const body = rq.body;
        const room = { name: body.name, user: body.user };
        const validate = validateUser(room);
        if (!validate.isSuccess) {
            rp.json(respond.fail(validate.message));
        }
        const rs = await roomService.createRoom(room);
        rp.json(respond.success(rs));
    } catch (error) {
        next(error);
    }
}

exports.getAll = async (rq, rp, next) => {
    try {
        const rs = await roomService.getAll();
        rp.json(respond.success(rs));
    } catch (error) {
        next(error);
    }
}

function validateUser(room) {
    let errors = [];
    if (room.name == null || room.name.trim() == '') {
        errors.push('Room name can not be empty');
    }

    if (room.user == null || room.user.length === 0) {
        errors.push('Room musts contain at least 1 user');
    }

    return { isSuccess: errors.length == 0, message: errors };
}