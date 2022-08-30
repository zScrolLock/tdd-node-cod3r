const request = require('supertest');
const dotenv = require('dotenv/config');
const app = require('../src/app');

test(`Response on / - [${process.env.PORT || 3001}]`, () => {
    return request(app).get('/').then((res) => expect(res.status).toBe(200));
});