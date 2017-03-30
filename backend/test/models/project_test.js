const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../index');

xdescribe("Project API", () => {
  it("GET /project should return json", (done) => {
    request(app)
      .get('/project')
      .end((err, response) => {
        expect(response.body).to.equal({ project: "project 1" })
        done();
      });
  });
});
