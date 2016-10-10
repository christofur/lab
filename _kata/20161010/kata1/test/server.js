/* global it, describe, before */
const request = require('supertest');
const app = require('../app/app');

let server;

before(() => {
  server = request(app);
});

describe('GET /', () => {
  it('Should return a greeting on the root path', (done) => {
    server.get('/')
    .expect('Hello, World!', done);
  });
});

describe('GET /v2/', () => {
  it('Should return a v2 greeting on the root path', (done) => {
    server.get('/v2/')
    .expect('Hello, World, V2!', done);
  });
});
