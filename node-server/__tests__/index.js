const app = require('../src/server');
const request = require('supertest')(app);

test('Missing routes raise a 404 error', async () => {
  await request
    .get('/foo')
    .expect('Content-Type', /json/)
    .expect(404, { errors: [ 'Not Found' ]});
});

test('Status route returns an empty 200 response', async () => {
  await request
    .get('/status')
    .expect('Content-Type', /json/)
    .expect(200, {});
});

test('Error 401 Unauthorized', async () => {
  await request
    .get('/errors/401')
    .expect('Content-Type', /json/)
    .expect(401, { errors: ["Unauthorized"] });
});

test('Error 403 Forbidden', async () => {
  await request
    .get('/errors/403')
    .expect('Content-Type', /json/)
    .expect(403, { errors: ["Forbidden"] });
});
