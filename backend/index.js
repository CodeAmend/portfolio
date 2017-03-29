const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes');

mongoose.Promise = global.Promise;


if (process.env.NODE_ENV !== 'test') {
mongoose.connect('mongodb://localhost/codeamend');
}

app.use(bodyParser.json());

routes(app);

if (!module.parent) {
  app.listen(6464, () => {
    console.log("Backend API running...");
  });
}

module.exports = app;
