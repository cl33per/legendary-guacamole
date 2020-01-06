const router = require("express").Router();
const profileRoutes = require("./profiles");
const groupRoutes = require("./groups");
const userRoutes = require("./users");
const plaidRoutes = require("./plaid");
const todoRoutes = require("./todos");

router.use("/profiles", profileRoutes);
router.use("/groups", groupRoutes);
router.use("/users",userRoutes);
router.use("/plaid", plaidRoutes);
router.use("/todo", todoRoutes)

module.exports = router;
