const app = require('../src/server');
const request = require('supertest');
const passport = require('passport');
const util = require('util');

function StrategyMock(options, verify) {
  this.name = 'mock';
  this.passAuthentication = options.passAuthentication || true;
  this.userId = options.userId || 1;
  this.verify = verify;
}

util.inherits(StrategyMock, passport.Strategy);

StrategyMock.prototype.authenticate = function(req) {
  if (this.passAuthentication) {
    const user = { id: this.userId };
    this.verify(user, function(err, resident) {
      if (err) this.fail(err);
      else this.success(resident);
    });
  } else {
    this.fail('Unauthorized');
  }
}

function mockVerify(user, done) {
  done(null, {
    id: 1,
    name: 'John Doe',
    ...user
  });
}

function passportMock(app, options = {}) {
  passport.use(new StrategyMock(options, mockVerify));
  app.get('/auth/mock', passport.authenticate('mock'));
}

describe('Authenticated requests', () => {

  it("authenticates with a mock" , async () => {
    await passportMock(app);
    await request(app)
      .get('/auth/mock')
      .expect(200, {});
  });

});
