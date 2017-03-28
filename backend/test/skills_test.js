const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index');

describe("Skills", () => {
  it("/skills GET should return json", (done) => {
    request(app)
      .get('/skills')
      .end((err, response) => {
        expect(response.body).to.eql({ skill: "javascript" })
        done();
      });
  });

  it("/skills POST should save a skill", () => {
    throw Error("not implemented");
    // name
    // star count
  });

});
