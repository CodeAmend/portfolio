const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../index');

const mongoose = require('mongoose');

const Skill = mongoose.model('skill');

describe("Skill API /skill", () => {

  let skill;
  let result;

  beforeEach((done) => {
    skill = new Skill({ name: 'Javascript' });
    skill.save()
    .then((savedSkill) => {
      result = savedSkill;
      done();
    });
  });

  afterEach((done) => {
    mongoose.connection.collections.skills.drop()
    .then(() => done());
  });

  it("GET to /api/skill will return all skills json", (done) => {
    request(app)
    .get('/api/skill')
    .end((err, res) => {
      expect(res.body.length).to.eql(1);
      expect(res.body[0]).to.contain({ name: 'Javascript' });
      done();
    });
  });

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

  it("PUT to /api/skill/:id update skill name", (done) => {
    request(app)
    .put(`/api/skill/${result.id}`)
    .send({name: 'Ajax'})
    .end((err, response) => {

      expect(response.status).to.eql(200);

      Skill.findOne({ _id: result.id})
      .then((newSkill) => {

        expect(newSkill.name).to.eql('Ajax');
        expect(response.body._id).to.eql(result.id);

        done();
      });
    });
  });

  it("DELETE /api/skill/:id to delete record and return ", (done) => {
    request(app)
    .delete(`/api/skill/${skill.id}`)
    .end((err, response) => {

      expect(response.status).to.eql(200);
      expect(response.body).to.eql({ message: 'Deleted!' });

      Skill.findById(skill.id)
      .then((skill) => {

        expect(skill).to.be.null;

      });
      done();
    });
  });

});
