const router = require('express').Router()
const controller = require('../controllers')

router.get('/', controller.citizenController.getAll) // get All
router.post("/", controller.citizenController.create); // Add one
router.delete("/", controller.citizenController.deleteAll); // delete all
router.put("/:_id", controller.citizenController.update); // update one
router.get("/:_id", controller.citizenController.getOne); // get one
router.delete("/:_id", controller.citizenController.deleteOne); // delete one



module.exports = router