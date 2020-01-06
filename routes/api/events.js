const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// TODO: Need to configure and understand routes to DB and how each realationsip. 
// Matches with "/api/profiles"
router.route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

module.exports = router;