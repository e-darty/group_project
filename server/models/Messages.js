const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  sender: String,
  email: String,
  phoneNumber: String,
  message: String,
});

const MessageModel = mongoose.model("message", messageSchema);

module.exports = MessageModel;
