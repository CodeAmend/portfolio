const SkillControllers = require('../controllers/skills_controller');
const ProjectControllers = require('../controllers/projects_controller');

module.exports = (app) => {

  app.get('/api/skill',SkillControllers.index);
  app.put('/api/skill/:id', SkillControllers.edit);
  app.post('/api/skill', SkillControllers.create);
  app.delete('/api/skill/:id', SkillControllers.delete);

  app.get('/api/project',ProjectControllers.index);
  app.put('/api/project/:id', ProjectControllers.edit);
  app.post('/api/project', ProjectControllers.create);
  app.delete('/api/project/:id', ProjectControllers.delete);

};
