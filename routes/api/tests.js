const router = require("express").Router();
const testController = require("../../controllers/testController");

// TODO: Need to configure and understand routes to DB and how each realationsip. 
// Matches with "/api/tests"
router.route("/")
  .get(testController.findAll)
  .post(testController.create);

// Matches with "/api/tests/:id"
router
  .route("/:id")
  .get(testController.findById)
  .put(testController.update)
  .delete(testController.remove);

module.exports = router;