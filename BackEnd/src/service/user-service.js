const encryptHelper = require('../helper/encrypt-helper.js');
const userRepo = require('../repo/user-repo.js');

exports.createUser = async function (body) {
    const hashPass = await encryptHelper.cryptPassword(body.password);
    const user = { username: body.username, password: hashPass, email: body.email };
    return await userRepo.createUser(user);
} 
