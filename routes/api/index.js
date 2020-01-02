const router = require("express").Router();
const profileRoutes = require("./profiles");
const groupRoutes = require("./groups");
const todoRoutes = require("./todos");

router.use("/profiles", profileRoutes);
router.use("/groups", groupRoutes);
router.use("/todos", todoRoutes);

module.exports = router;
