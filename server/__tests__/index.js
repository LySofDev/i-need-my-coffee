const app = require('../');
const request = require('supertest')(app);

test('Missing routes raise a 404 error', done => {
  request
    .get('/foo')
    .expect('Content-Type', /json/)
    .expect(404, { errors: ["Resource not found" ]})
    .end((err, res) => {
      if (err) return done(err);
      done();
    });
});
