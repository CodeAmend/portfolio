const Skill = require('../models/skill_schema');

module.exports = (app) => {

  app.get('/api', (req, res) => {
    res.send({ api: "portfolio website" });
  });

  app.get('/api/skill', (req, res) => {
    res.send({ skill: "javascript" });
  });

  app.put('/api/skill/:id', (req, res, next) => {
    const _id = req.params.id;
    const skillProps = req.body;
    Skill.findByIdAndUpdate(
      { _id }, skillProps, { new: true }
    ).then((skill) => {
      res.status(200).send(skill);
    }).catch(next);
  });

  app.post('/api/skill', (req, res, next) => {
    const skill = new Skill(req.body);
    skill.save()
    .then((result) => {
      res.status(201).send(result);
    }).catch(next);
  });

  app.get('/api/project', (req, res) => {
    res.send(res.body);
  });

  app.delete('/api/skill/:id', (req, res, next) => {
    const _id = req.params.id;
    Skill.findByIdAndRemove(_id)
    .then((skill) => {
      if (!skill._id) res.status(404);
      res.status(200).send({ message: "Deleted!" })
    });
  });

};
