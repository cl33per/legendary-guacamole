const router = require("express").Router();
const profileRoutes = require("./profiles");
const groupRoutes = require("./groups");
const userRoutes = require("./users");
const plaidRoutes = require("./plaid");
const todoRoutes = require("./todos");
const eventRoutes = require("./events");
const testRoutes = require("./tests");
const billRoutes = require("./bills");
const filesRoutes = require('./files')
const usersRoutes = require("./users");

router.use("/profiles", profileRoutes);
router.use("/groups", groupRoutes);
router.use("/users",userRoutes);
router.use("/plaid", plaidRoutes);
router.use("/todos", todoRoutes);
router.use("/events", eventRoutes);
router.use("/tests", testRoutes);
router.use("/bills", billRoutes);
router.use("/files",filesRoutes);
router.use("/users",usersRoutes);

module.exports = router;
