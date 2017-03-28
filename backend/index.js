const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.send({ api: "portfolio website" });
});

app.get('/skills', (req, res) => {
  res.send({ skill: "javascript" });
});

app.get('/projects', (req, res) => {
  res.send({ project: "project 1" });
});

if (!module.parent) {
  app.listen(6464, () => {
    console.log("Backend API running...");
  });
}

module.exports = app;
