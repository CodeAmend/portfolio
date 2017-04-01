const Skill = require('../models/skill_schema');

module.exports = {

  index(req, res, next) {
    Skill.find({})
    .then((results) => {
      res.send(results);
    })
  },

  edit(req, res, next) {
    const _id = req.params.id;
    const skillProps = req.body;
    Skill.findByIdAndUpdate(
      { _id }, skillProps, { new: true }
    ).then((skill) => {
      res.status(200).send(skill);
    }).catch(next);
  },

  create(req, res, next) {
    const skill = new Skill(req.body);
    skill.save()
    .then((result) => {
      res.status(201).send(result);
    }).catch(next);
  },

  delete(req, res, next) {
    const _id = req.params.id;
    Skill.findByIdAndRemove(_id)
    .then((skill) => {
      if (!skill._id) res.status(404);
      res.status(200).send({ message: "Deleted!" })
    });
  }

}
