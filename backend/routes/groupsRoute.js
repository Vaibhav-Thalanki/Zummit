const express = require("express");
const router = express.Router();

const { getGroupTherapySessions , createGroupTherapySession } = require("../controllers/groupTherapyController");
const { getSupportGroupSessions , createSupportGroupSession } = require("../../controllers/supportGroupController");

router.route("/Grouptherapy").get(getGroupTherapySessions);
router.post("/Grouptherapy", createGroupTherapySession);

router.get("/Supportgroup", getSupportGroupSessions);
router.post("/Supportgroup", createSupportGroupSession);

module.exports = router;

