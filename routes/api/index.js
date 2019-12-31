const router = require("express").Router();
const profileRoutes = require("./profiles");
const groupRoutes = require("./groups");

router.use("/profiles", profileRoutes);
router.use("/groups", groupRoutes);

module.exports = router;
