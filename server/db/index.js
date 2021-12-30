const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost/edarty";

const db = mongoose.connect(mongoUri);

module.exports = db;
