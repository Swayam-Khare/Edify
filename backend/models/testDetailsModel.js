const mongoose = require("mongoose");

const testDetailsSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please enter a user id"],
  },

  subject: {
    type: String,
    required: [true, "Please enter subject"],
  },

  questions: {
    type: [mongoose.Schema.Types.ObjectId],
    required: [true, "Please enter questions"],
  },

  answers: {
    type: [String],
    required: [true, "Please enter answers"],
  },

  score: {
    type: Number,
    required: [true, "Please enter score"],
  },

  difficulty: {
    type: String,
    required: [true, "Please enter difficulty level"],
  },

  duration: {
    type: Number,
    required: [true, "Please enter duration"],
  },

  report_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please enter a report id"],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  photo: {
    type: String,
    default: "",
  },
});

const TestDetails = mongoose.model("TestDetails", testDetailsSchema);

module.exports = TestDetails;
