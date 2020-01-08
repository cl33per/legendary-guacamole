const router = require("express").Router();
const billsController = require("../../controllers/billsController");

// TODO: Need to configure and understand routes to DB and how each realationsip. 
// Matches with "/api/bills"
router.route("/")
  .get(billsController.findAll)
  .post(billsController.create);

// Matches with "/api/bills/:id"
router
  .route("/:id")
  .get(billsController.findById)
  .put(billsController.update)
  .delete(billsController.remove);

module.exports = router;