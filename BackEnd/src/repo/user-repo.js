const dbCtx = require('../database/mongo-db.js');

const collectionName = 'user';

exports.getUser = async function () {

}

exports.createUser = async function (user) {
    console.log('repo');
    const rs = dbCtx.insertOne(collectionName, user);
    return rs;
}

exports.login = async function () {

}
