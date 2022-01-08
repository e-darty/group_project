module.exports = new (class CitizenService {
  constructor() {
    this.citizen = require("../models/Citizen");
  }
  getAll() {
    return this.citizen.find({});
  }
  create(payload) {
    return this.citizen.create(payload);
  }
  deleteAll() {
    return this.citizen.deleteAll();
  }
  update(_id, payload) {
    return this.citizen.findOneAndUpdate({ _id }, payload, {
      new: true,
      useFindAndModify: true
    });
  }
  getOne(_id) {
    return this.citizen.findOne({ _id });
  }
  deleteOne() {
    return this.citizen.findOneAndDelete(  {
      useFindAndModify: true
    });
  }
  
})();
