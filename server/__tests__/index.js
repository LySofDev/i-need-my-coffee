const app = require('../src/server');
const request = require('supertest')(app);

test('Missing routes raise a 404 error', async () => {
  await request
    .get('/foo')
    .expect('Content-Type', /json/)
    .expect(404, { errors: [ 'Resource not found' ]});
});

test('Status route returns an empty 200 response', async () => {
  await request
    .get('/status')
    .expect('Content-Type', /json/)
    .expect(200, {});
});
