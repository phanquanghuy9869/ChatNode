const userService = require('../service/user-service.js');
const respond = require('../utilities/respond.js');
const ValidationError = require('../utilities/app-error.js');

exports.createUser = async function (rq, rp) {
    try {
        const rs = await userService.createUser(rq.body);
        rp.json(respond.success(rs));
    } catch (error) {
        if (error instanceof ValidationError) {
            rp.json(respond.fail(error.message));
        } else {
            throw error;
        }
    }
}