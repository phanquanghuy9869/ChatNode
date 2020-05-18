const dbCtx = require('../database/mongo-db.js');

const collectionName = 'user';

exports.getUser = async function () {

}

exports.createUser = async function (user) {
    const rs = await dbCtx.insertOne(collectionName, user);
    return rs;
}

exports.isExists = async function (username) {
    const rs = await dbCtx.isExists(collectionName, { username: username });
    return rs;
}

exports.getUserByUsername = async function (username) {
    const record = await dbCtx.getOneRecord(collectionName, { username: username }, {});
    return record;
}
