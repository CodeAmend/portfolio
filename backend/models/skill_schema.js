const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SkillSchema = Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
});



const handleE11000 = function(error, res, next) {
  if (error.name === 'MongoError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'));
  } else {
    next();
  }
};

SkillSchema.post('save', handleE11000);
SkillSchema.post('update', handleE11000);
SkillSchema.post('findOneAndUpdate', handleE11000);
SkillSchema.post('insertMany', handleE11000);

const Skill = mongoose.model('skill', SkillSchema);

module.exports = Skill;
