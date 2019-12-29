const router = require("express").Router();
const todosController = require("../../controllers/todosController");

// TODO: Need to configure and understand routes to DB and how each realationsip. 
// Matches with "/api/profiles"
router.route("/")
  .get(todosController.findAll)
  .post(todosController.create);

// Matches with "/api/todos/:id"
router
  .route("/:id")
  .get(todosController.findById)
  .put(todosController.update)
  .delete(todosController.remove);

module.exports = router;