const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectSchema = Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;
