const router = require("express").Router();
const controller = require("../controllers");
router.post("/", controller.userController.create); // Add one
router.get("/:_id", controller.userController.getOne); // get one

module.exports = router;
