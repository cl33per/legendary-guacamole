const router = require("express").Router();
const bookRoutes = require("./books");
const profileRoutes = require("./profiles");
const groupRoutes = require("./groups");

//  TODO: Not to sure if we even need to modify this.
// Book routes
router.use("/books", bookRoutes);
router.use("/profiles", profileRoutes);
router.use("/groups", groupRoutes);

module.exports = router;
