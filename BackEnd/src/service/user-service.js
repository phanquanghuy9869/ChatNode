const encryptHelper = require('../helper/encrypt-helper.js');
const userRepo = require('../repo/user-repo.js');
const ValidationError = require('../utilities/app-error.js');

exports.createUser = async function (body) {
    const isValid = await validateUser(body);
    if (!isValid.isSuccess) {
        throw new ValidationError(isValid.message);
    }

    const hashPass = await encryptHelper.cryptPassword(body.password);
    const user = { username: body.username, password: hashPass, email: body.email };
    return await userRepo.createUser(user);
}

validateUser = async function (user) {
    let error = '';
    const isExisted = await userRepo.isExists(user.username);
    if (isExisted) {
        error += 'This username is existed!';
    }
    const isSuccess = error === '' ? true : false;
    return { isSuccess: isSuccess, message: error };
}
