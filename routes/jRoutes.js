const express = require("express");
const jController = require("../controllers/jController.js");
const router = express.Router();
const activityLogger = require("../utils/activityLogger.js");

router.use(activityLogger);

router.get("/", jController.queryData);

router.get("/joya/:id", jController.byId);

router.get("/filtros", jController.queryDataFilter);

module.exports = router;
