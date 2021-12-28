const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  cin: {
    type: Number,
    unique: true,
  },
  username: String,
  password: String,
  name: String,
  lastName: String,
  dateOfBirth: {
    type: Date,
    required: true,
    trim: true,
  },
  placeOfBirth: String,
  drivingLicence: String,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;