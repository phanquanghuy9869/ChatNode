const encryptHelper = require('../helper/encrypt-helper.js');
const userRepo = require('../repo/user-repo.js');
const ValidationError = require('../utilities/app-error.js');

exports.createUser = async function (body) {
    const isValid = await validateUser(body);
    if (!isValid.isSuccess) {
        throw new ValidationError(isValid.message);
    }

    const hashPass = await encryptHelper.cryptPassword(body.password);
    const user = { username: body.email, password: hashPass, email: body.email, firstName: body.firstName, lastName: body.lastName };
    return await userRepo.createUser(user);
}

validateUser = async function (user) {
    let error = '';
    const isExisted = await userRepo.isExists(user.email);
    if (isExisted) {
        error += 'This username is existed!';
    }
    
    const isSuccess = error === '' ? true : false;
    return { isSuccess: isSuccess, message: error };
}

exports.login = async function (username, password) {
    const user = await userRepo.getUserByUsername(username);

    if (user == null) {
        throw Error('User is not existed');
    }

    if (!encryptHelper.comparePassword(password, user.password)) {
        throw Error('Wrong password');
    }

    return user;
}
