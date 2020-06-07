const supertest = require('supertest');
const { User } = require('../model/schema');
const app = require('../../server');
const request = supertest(app);
const { setupDb, token } = require('../test-hook/db.hook');

setupDb();

describe('Test user api', () => {
    describe('Test create api', () => {
        test('Should create user', async (done) => {
            try {
                const res = await request.post('/user/create')
                    .set('authorization', `bearer ${token}`)
                    .send({ username: 'huy@gmail.com', password: '12345678', email: 'huy@gmail.com' });
                const respond = res.body;
                expect(respond.isSuccess).toBe(true);
                expect(respond.data.username).toBe('huy@gmail.com');
                const queryUser = await User.findOne({ username: 'huy@gmail.com' });
                expect(queryUser.username).toBe('huy@gmail.com');
            } catch (error) {
                done(error);
            }
            done();
        });

        test('Should return all user', async (done) => {
            try {
                const testUsers = [
                    new User({ username: 'huy1@gmail.com', password: '12345678', email: 'huy1@gmail.com' }),
                    new User({ username: 'huy2@gmail.com', password: '12345678', email: 'huy2@gmail.com' })
                ];
                await User.insertMany(testUsers);
                const res = await request.post('/user/getall').set('authorization', `bearer ${token}`);
                const respond = res.body;
                expect(respond.isSuccess).toBe(true);
                expect(respond.data[0].username).toBe('huy1@gmail.com');
                expect(respond.data[1].username).toBe('huy2@gmail.com');
                done();
            } catch (err) {
                done(err);
            }
        })
    })
})