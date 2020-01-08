const router = require("express").Router();
const filesController = require("../../controllers/filesController");

// TODO: Need to configure and understand routes to DB and how each realationsip. 
// Matches with "/api/profiles"
router.route("/")
    .get(filesController.findAll)
    .post(filesController.create);

// Matches with "/api/files/:id"
router
    .route("/:id")
    .get(filesController.findById)
    .put(filesController.update)
    .delete(filesController.remove);

module.exports = router;
