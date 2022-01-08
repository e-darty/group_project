const mongoose = require("mongoose");
const citizenSchema = new mongoose.Schema({
  cin: {
    type: Number,
    unique: true,
  },
  name: String,
  lastName: String,
  dateOfBirth: String,
  placeOfBirth: String,
  drivingLicence: String,
  licence: String,
  adress: String,
});

const CitizenModel = mongoose.model("citizen", citizenSchema);

module.exports = CitizenModel;