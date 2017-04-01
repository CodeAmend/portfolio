const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SkillSchema = require('./skill_schema');

const ProjectSchema = Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  skill: [{
    type: Schema.Types.ObjectId,
    ref: 'skill'
  }]
});

const Project = mongoose.model('project', ProjectSchema);

module.exports = Project;
