const express = require("express");
const router = express.Router();

const { getGroupTherapySessions , createGroupTherapySession } = require("../controllers/groupTherapyController");
const { getSupportGroupSessions , createSupportGroupSession } = require("../../controllers/supportGroupController");

router.get("/", getGroupTherapySessions);
router.post("/", createGroupTherapySession);

router.get("/", getSupportGroupSessions);
router.post("/", createSupportGroupSession);

module.exports = router;

