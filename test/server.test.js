const supertest = require('supertest');
const request = supertest('http://localhost:3001');

test('Server is Running on 3001', () => {
    return request.get('/').then(res => expect(res.status).toBe(200)); // To receive async tests
});