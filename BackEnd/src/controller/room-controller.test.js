const supertest = require('supertest');
const { Room } = require('../model/schema');
const app = require('../../server');
const request = supertest(app);
const { setupDb, token } = require('../test-hook/db.hook');

setupDb();

describe('Test room api', () => {
    describe('Test create room', function () {
        test('Should save room to database', async function (done) {
            try {
                const res = await request.post('/room/create')
                    .set('authorization', 'bearer ' + token)
                    .send({ name: 'Room', user: ['Huy', 'Phan'] });
                response = res.body;
                expect(response.isSuccess).toBe(true);
                expect(response.data.name).toBe('Room');
                done();
            } catch (error) {
                done(error);
            }
        })
    });

    describe('Test get all room', function () {
        test('Should return all room from database', async (done) => {
            try {
                // console.error('1. Start fetching data');
                const rooms = [new Room({ name: 'Room 1', user: ['Huy', 'Phan'] }), new Room({ name: 'Room 2', user: ['Huy 2', 'Phan 2'] })];
                await Room.insertMany(rooms);
                const res = await request.post('/room/getall')
                    .set('authorization', 'bearer ' + token);
                const response = res.body;
                console.log(response.data);
                // console.error('2. Finish fetching data');
                // console.error('3. Start expect');
                expect(response.isSuccess).toBe(true);
                // console.info('4. Finish first expect');
                expect(response.data.length).toBe(2);
                expect(response.data[0].name).toBe('Room 1');
                // expect(response.data[0].user).toMatchObject(['Huy', 'Phan']);
                expect(response.data[1].name).toBe('Room 2');
                // expect(response.data[1].user).toMatchObject(['Huy 2', 'Phan 2']);
                done();
            } catch (error) {
                done(error);
            }
        })
    });
})