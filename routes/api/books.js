const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// TODO: Need to configure and understand routes to DB and how each realationsip. 
// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
