const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true, // Add validator
  },

  password: {
    type: String,
    required: [true, "Please enter a password"],
    min: 6,
  },

  test_details: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
