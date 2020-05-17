const mongoClient = require('mongodb').MongoClient;
const config = require('../../config/config.js');


exports.connectDb = async function () {
    const client = await mongoClient.connect(config.db.server);
    const db = client.db(config.db.database);
    return { client: client, database: db }
}

exports.insertOne = async function (collectionName, record) {
    const ctx = await exports.connectDb();
    var client = ctx.client;
    var rs;
    try {
        const db = ctx.database;
        const collection = db.collection(collectionName);
        rs = await collection.insertOne(record);
        return rs.ops[0];
    } finally {
        client.close();
    }
}

exports.isExists = async function (collectionName, query) {
    const ctx = await exports.connectDb();
    try {
        const rs = ctx.database.collection(collectionName).count(query, {limit: 1});
        return rs == 1;
    } finally {
        ctx.client.close();
    }
}
