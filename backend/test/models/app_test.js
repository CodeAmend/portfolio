const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../index');


xdescribe("App", () => {
  it("/api should return json", (done) => {
    request(app)
      .get('/api')
      .end((err, response) => {
        expect(response.body).to.eql({ api: "portfolio website" })
        done();
      });
  });
});
