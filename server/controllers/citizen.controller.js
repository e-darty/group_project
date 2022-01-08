const services = require("../services");

module.exports = {
  async getAll(req, res) {
    try {
      const citizens = await services.citizenService.getAll();
      res.send(citizens);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async create(req, res) {
    try {
      const user = await services.citizenService.create(req.body);
      res.send(user);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteAll(req, res) {
    try {
      const citizens = await services.citizenService.deleteAll();
      res.send(citizens);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async update(req, res) {
    try {
      const citizen = await services.citizenService.update(req.params._id, req.body);
      res.send(citizen);
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
  async deleteOne(req, res) {
    try {
      const citizen = await services.citizenService.deleteOne(req.params._id);
      res.send(citizen);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  
};
