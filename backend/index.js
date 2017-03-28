const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());

routes(app);

if (!module.parent) {
  app.listen(6464, () => {
    console.log("Backend API running...");
  });
}

module.exports = app;
