let jwt = require('jsonwebtoken');
let config = require('../../config/config');
const mongoose = require('mongoose');
const supertest = require('supertest');

const app = require('../../server');
const request = supertest(app);
const setupDb = require('../test-hook/test.hook');

setupDb();


describe('Test create room', function () {
    test('Should save room to database', async function (done) {
        const res = await request.post('/room/createroom')
            .set('Authorization', 'bearer ' + token)
            .send({ name: 'Room 1', user: ['Huy', 'Phan'] });
        const response = res.body;
        console.log(res.body);
        expect(response.isSuccess).toBe(true);
        expect(response.data.name).toBe('Room 1');
        done();
    })
})