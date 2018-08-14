// What needs to be tested:
// - Endpoints are working properly (POST, GET, PUT)
const request = require('supertest');
const express = require('express');
const app = express()

describe("Songs endpoints", function() {
  it("GET returns a JSON object", function(done) {
    request(app)
      .get('/songs')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });


});
