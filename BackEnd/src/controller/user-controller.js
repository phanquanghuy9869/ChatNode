const userService = require('../service/user-service.js');
const respond = require('../utilities/respond.js');

exports.createUser = async function (rq, rp) {
    // try {

    // } catch (error) {
    //     rp.json(error);
    // }
    const rs = await userService.createUser(rq.body);
    const res = respond.success(data);
    rp.json(res);
}