const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  topics: {
    type: [String],
    required: true
  },

  strengths: {
    type: [String],
    required: true
  },

  scores: {
    type: [Number],
    required: true
  },

});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;