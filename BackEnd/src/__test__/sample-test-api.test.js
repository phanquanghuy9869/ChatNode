const supertest = require('supertest');
const app = require('../../server');

describe("Testing the movie api" , () => {
    if('test base route should return true for status', async () => {
        const response = await supertest(app).get('/');
        console.log('Test response: ', response);
		expect(response.status).toBe(200);
		expect(response.body.status).toBe(true);
    });
});