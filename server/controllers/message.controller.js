const services = require("../services");

module.exports = {
  async getAll(req, res) {
    try {
      const messages = await services.messageService.getAll();
      res.send(messages);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async create(req, res) {
    try {
      const message = await services.messageService.create(req.body);
      res.send(message);
      console.log(message);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
  async deleteAll(req, res) {
    try {
      const messages = await services.messageService.deleteAll();
      res.send(messages);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
