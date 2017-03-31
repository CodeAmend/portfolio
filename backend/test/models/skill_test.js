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

  it("PUT to /api/skill/:id update skill name", (done) => {
    const skill = new Skill({ name: 'ajax' });
    skill.save()
    .then((result) => {
      request(app)
      .put(`/api/skill/${result.id}`)
      .send({name: 'not ajax'})
      .end((err, response) => {

        expect(response.status).to.eql(200);

        Skill.findOne({ _id: result.id})
        .then((newSkill) => {

          expect(newSkill.name).to.eql('not ajax');
          expect(response.body._id).to.eql(result.id);

          done();
        });
      });
    });
  });

  it("DELETE /api/skill/:id to delete record and return ", (done) => {
    const skill = new Skill({ name: 'Node.js'});
    skill.save()
    .then(() => {
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

});
