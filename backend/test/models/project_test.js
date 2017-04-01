const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../index');

const mongoose = require('mongoose');

const Project = mongoose.model('project');

describe("Project API /project", () => {

  let project;
  let result;

  beforeEach((done) => {
    project = new Project({ name: 'CodeAmend Portfolio Website' });
    project.save()
    .then((savedProject) => {
      result = savedProject;
      done();
    });
  });

  afterEach((done) => {
    mongoose.connection.collections.projects.drop()
    .then(() => done());
  });

  it("GET to /api/project will return all project json", (done) => {
    request(app)
    .get('/api/project')
    .end((err, res) => {
      expect(res.body.length).to.eql(1);
      expect(res.body[0]).to.contain({ name: 'CodeAmend Portfolio Website' });
      done();
    });
  });

  it("POST to /api/project new project name", (done) => {
    request(app)
    .post('/api/project')
    .send({ name: "javascript" })
    .end((err, response) => {

      expect(response.status).to.eql(201);
      expect(response.body).to.have.property('_id');

      done();
    });
  });

  it("PUT to /api/project/:id update project name", (done) => {
    request(app)
    .put(`/api/project/${result.id}`)
    .send({name: 'Portfolio Website'})
    .end((err, response) => {

      expect(response.status).to.eql(200);

      Project.findOne({ _id: result.id})
      .then((newProject) => {

        expect(newProject.name).to.eql('Portfolio Website');
        expect(response.body._id).to.eql(result.id);

        done();
      });
    });
  });

  it("DELETE /api/project/:id to delete record and return ", (done) => {
    request(app)
    .delete(`/api/project/${project.id}`)
    .end((err, response) => {

      expect(response.status).to.eql(200);
      expect(response.body).to.eql({ message: 'Deleted!' });

      Project.findById(project.id)
      .then((project) => {

        expect(project).to.be.null;

      });
      done();
    });
  });

});
