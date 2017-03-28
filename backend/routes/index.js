module.exports = (app) => {

  app.get('/api', (req, res) => {
    res.send({ api: "portfolio website" });
  });

  app.get('/skills', (req, res) => {
    res.send({ skill: "javascript" });
  });

  app.get('/projects', (req, res) => {
    res.send({ project: "project 1" });
  });

}
