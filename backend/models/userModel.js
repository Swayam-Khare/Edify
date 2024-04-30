const bcrypt = require("bcryptjs");
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
    select: false,
    min: 6,
  },

  test_details: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
}

const User = mongoose.model("User", userSchema);

module.exports = User;
