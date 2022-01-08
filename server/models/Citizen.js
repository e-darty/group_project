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
  carName: String,
  carType: String,
  carNum1: String,
  carNum2: String,

});

const CitizenModel = mongoose.model("citizen", citizenSchema);

module.exports = CitizenModel;