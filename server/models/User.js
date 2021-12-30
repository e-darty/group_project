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
  dateOfBirth: String,
  placeOfBirth: String,
  drivingLicence: String,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;