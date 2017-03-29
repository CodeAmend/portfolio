const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../index');

const mongoose = require('mongoose');


const Skill = mongoose.model('skill');

describe("Skill API", () => {

  // it("/skill GET should return json", (done) => {
  //   request(app)
  //     .get('/skill')
  //     .end((err, response) => {
  //
  //       expect(response.body).to.eql({ skill: "javascript" });
  //       done();
  //     });
  // });

  it("/skill POST should save a skill name", (done) => {
    request(app)
    .post('/skill')
    .send({ name: "javascript" })
    .end((err, response) => {
      expect(response.status).to.eql(201);
      expect(response.body).to.have.property('_id');
      done();
    });
  });

});
