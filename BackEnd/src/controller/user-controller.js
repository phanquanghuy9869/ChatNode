const userService = require('../service/user-service.js');
const respond = require('../utilities/respond.js');

exports.createUser = async function (rq, rp) {
    const rs = await userService.createUser(rq.body);
    const res = respond.success(rs);
    rp.json(res);
}