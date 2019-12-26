const router = require("express").Router();
const groupsController = require("../../controllers/groupsController");

// TODO: Need to configure and understand routes to DB and how each realationsip. 
// Matches with "/api/groups"
router.route("/")
  .get(groupsController.findAll)
  .post(groupsController.create);

// Matches with "/api/groups/:id"
router
  .route("/:id")
  .get(groupsController.findById)
  .put(groupsController.update)
  .delete(groupsController.remove);

module.exports = router;