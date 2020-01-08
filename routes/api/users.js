const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// TODO: Need to configure and understand routes to DB and how each realationsip. 
// Matches with "/api/users/register"
router.route("/")
    .get(usersController.findAll)
    .post(usersController.create);

router.route("/register")
    .post(usersController.register);

// Matches with "/api/users/login"
router
    .route("/login")
    .post(usersController.login);

module.exports = router;