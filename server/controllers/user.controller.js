const services = require("../services");

module.exports = {
  async create(req, res) {
    try {
      const user = await services.citizenService.create(req.body);
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async getOne(req, res) {
    try {
      const citizen = await services.citizenService.getOne(req.params._id);
      res.send(citizen);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
 
};
