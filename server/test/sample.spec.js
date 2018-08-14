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
  it("POST returns a JSON object", function(done) {
    request(app)
      .get('/songs')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
  it("PUT returns a JSON object", function(done) {
    request(app)
      .get('/songs')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
})

describe("Bookmark endpoints", function() {
  it("GET returns a JSON object", function(done) {
    request(app)
      .get('/songs')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
})

describe("History endpoints", function() {
  it("GET returns a JSON object", function(done) {
    request(app)
      .get('/songs')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  });
})

describe("Register endpoint", function() {
  it("POST (registration) returns a JSON object", function(done) {
    request(app)
      .post('/register')
      .send({email: 'some-email@valid-email.com', password: 'supersecurepassword'})
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done();
      })
  })

  it("Can't register with invalid email address", function(done) {
    request(app)
      .post('/register')
      .send({email: 'invalid.email@', password: 'supersecurepassword'})
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done();
      })
  });

  it("Successful POST returns a hashed password", function() {
    // code goes here
  });

  it("Successful POST returns a token property", function() {
    // code goes here
  });

  it("Can't register with invalid password", function(done) {
    request(app)
      .post('/register')
      .send({email: 'some-email@valid-email.com', password: 'notvalid'})
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        done();
      })
  });
})

describe("Login endpoint", function() {
  it("Returns 200 OK with a valid login credential", function(done) {
    request(app)
      .get('/songs')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it("Returns error with invalid login credential", function(done) {
    request(app)
      .get('/songs')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })
});
