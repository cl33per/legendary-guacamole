const router = require("express").Router();
const usersRoutes = require("./users");
const plaidRoutes = require("./plaid");

const groupRoutes = require("./groups");
const todoRoutes = require("./todos");
const eventRoutes = require("./events");
const billRoutes = require("./bills");
const filesRoutes = require('./files')
const uploadRoutes = require("./upload");

router.use("/users",usersRoutes);
router.use("/plaid", plaidRoutes);

router.use("/groups", groupRoutes);
router.use("/todos", todoRoutes);
router.use("/events", eventRoutes);
router.use("/bills", billRoutes);
router.use("/files",filesRoutes);
router.use("/upload",uploadRoutes);

module.exports = router;
