const Project = require('../models/project_schema');

module.exports = {

  index(req, res, next) {
    Project.find({})
    .then((results) => {
      res.send(results);
    })
  },

  edit(req, res, next) {
    const _id = req.params.id;
    const projectProps = req.body;
    Project.findByIdAndUpdate(
      { _id }, projectProps, { new: true }
    ).then((project) => {
      res.status(200).send(project);
    }).catch(next);
  },

  create(req, res, next) {
    const project = new Project(req.body);
    project.save()
    .then((result) => {
      res.status(201).send(result);
    }).catch(next);
  },

  delete(req, res, next) {
    const _id = req.params.id;
    Project.findByIdAndRemove(_id)
    .then((project) => {
      if (!project._id) res.status(404);
      res.status(200).send({ message: "Deleted!" })
    });
  }

}
