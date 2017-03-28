const expect = require('chai').expect;
const request = require('supertest');
const app = require('../index');

describe("Skills", () => {
  it("/projects GET should return json", (done) => {
    request(app)
      .get('/projects')
      .end((err, response) => {
        expect(response.body).to.eql({ project: "project 1" })
        done();
      });
  });
});
