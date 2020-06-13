let jwt = require('jsonwebtoken');
let config = require('../../config/config');
const { User } = require('../model/schema');
const encryptHelper = require('../helper/encrypt-helper.js');
const mongoose = require('mongoose');
const mongooseCtx = require('../database/mongoose');

mongoose.set('useCreateIndex', true);
mongoose.promise = global.Promise;

async function removeAllCollections() {
    const collections = Object.keys(mongoose.connection.collections)
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName];
        await collection.deleteMany();
    }
}

async function dropAllCollections() {
    const collections = Object.keys(mongoose.connection.collections)
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName]
        try {
            await collection.drop()
        } catch (error) {
            // Sometimes this error happens, but you can safely ignore it
            if (error.message === 'ns not found') return
            // This error occurs when you use it.todo. You can
            // safely ignore this error too
            if (error.message.includes('a background operation is currently running')) return
            console.log(error.message)
        }
    }
}

// const token = '';

exports.setupDb = function () {

    // Connect to Mongoose

    beforeAll(async (done) => {
        await mongoose.connect(config.db.server + '/' + config.db.database);
        // await mongooseCtx.connect();
        // console.error('Finish beforeAll');
        done();
        // //create user
        // const hashPass = await encryptHelper.cryptPassword('1234');
        // const user = new User({ username: 'test', password: hashPass, email: 'test@gmail.com' });
        // const saveUser = await user.save();
        // console.error('save user: ', saveUser);

        // //fetch token
        // const res = await request.post('/auth/tok').send({ username: 'test', password: '1234' });
        // console.error('fetch token: ', res.body);
        // token = res.body.data;
    })

    // Cleans up database between each test
    afterEach(async (done) => {
        await removeAllCollections();
        // console.error('Finish afterEach');
        done();
    })

    // Disconnect Mongoose
    afterAll(async (done) => {
        await dropAllCollections()
        await mongoose.disconnect();
                // await mongooseCtx.disconnect();
        // console.error('Finish afterAll');
        done();
    })

}

const username = 'testUser';
exports.token = jwt.sign({ username: username }, config.auth.secret, { expiresIn: '69h' });