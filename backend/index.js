const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.send({ api: "portfolio website" });
});

if (!module.parent) {
  app.listen(6464, () => {
    console.log("Backend API running...");
  });
}

module.exports = app;
