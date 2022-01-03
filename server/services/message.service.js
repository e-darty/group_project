module.exports = new (class MessageService {
  constructor() {
    this.message = require("../models/Messages");
  }
  getAll() {
    return this.message.find({});
  }
  create(payload) {
    return this.message.create(payload);
  }
  deleteAll() {
    return this.message.deleteAll();
  }
  
  
})();
