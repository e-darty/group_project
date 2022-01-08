const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    cin: {
      type: Number,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
