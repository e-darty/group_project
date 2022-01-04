const router = require("express").Router();
const controller = require("../controllers");

router.get("/", controller.messageController.getAll); // get All
router.post('/', controller.messageController.create) // Add one
router.delete('/', controller.messageController.deleteAll) // delete all





module.exports = router;
