const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SkillSchema = Schema({
  name: String
});

const Skill = mongoose.models('skill', SkillSchema);

export.modules = Skill; 
