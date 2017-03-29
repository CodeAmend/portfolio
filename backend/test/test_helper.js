const mongoose = require('mongoose');

before(done => {
  mongoose.connect('mongodb://localhost/portfolio_test');
  mongoose.connection
    .once('open', () => done())
    .on('error', err => {
      console.warn("Warning", err);
    })
});

beforeEach(done => {
  const { skills } = mongoose.connection.collections;
  skills.drop()
    .then(() => done())
    .catch(() => done());
});

after(() => {
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.disconnect((err) => {

  });
});
