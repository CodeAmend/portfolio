const SkillControllers = require('../controllers/skills_controller');

module.exports = (app) => {
  //
  // app.get('/api', (req, res) => {
  //   res.send({ api: "portfolio website" });
  // });
  //
  // app.get('/api/project', (req, res) => {
  //   res.send(res.body);
  // });
  //
  app.get('/api/skill',SkillControllers.index);
  app.put('/api/skill/:id', SkillControllers.edit);
  app.post('/api/skill', SkillControllers.create);
  app.delete('/api/skill/:id', SkillControllers.delete);

};
