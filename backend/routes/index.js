const Skill = require('../models/skill_schema');

module.exports = (app) => {

  app.get('/api', (req, res) => {
    res.send({ api: "portfolio website" });
  });

  app.get('/skill', (req, res) => {
    res.send({ skill: "javascript" });
  });

  app.post('/skill', (req, res) => {
    
    res.send(req.body);
  });

  app.get('/project', (req, res) => {
    res.send(res.body);
  });

}
