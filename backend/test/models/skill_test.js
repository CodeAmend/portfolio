const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../index');

const mongoose = require('mongoose');


const Skill = mongoose.model('skill');

describe("Skill API /skill", () => {

  it("POST to /api/skill new skill name", (done) => {
    request(app)
    .post('/api/skill')
    .send({ name: "javascript" })
    .end((err, response) => {
      expect(response.status).to.eql(201);
      expect(response.body).to.have.property('_id');
      done();
    });
  });

});
