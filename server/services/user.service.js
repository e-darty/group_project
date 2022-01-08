module.exports = new (class UserService {
  constructor() {
    this.user = require("../models/User");
  }
 
  create(payload) {
    return this.user.create(payload);
  }

  getOne(_id) {
    return this.user.findOne({ _id });
  }
 
})();
