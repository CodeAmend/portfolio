const Skill = require('../models/skill_schema');

module.exports = (app) => {

  app.get('/api', (req, res) => {
    res.send({ api: "portfolio website" });
  });

  app.get('/skill', (req, res) => {
    res.send({ skill: "javascript" });
  });

  app.post('/skill', (req, res) => {
    const skill = new Skill(req.body);
    skill.save()
    .then((result) => {
      res.status(201).send(result);
    }, () => {});
  });

  app.get('/project', (req, res) => {
    res.send(res.body);
  });

};
