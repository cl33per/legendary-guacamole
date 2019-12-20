const router = require("express").Router();
const bookRoutes = require("./books");

//  TODO: Not to sure if we even need to modify this.
// Book routes
router.use("/books", bookRoutes);

module.exports = router;
