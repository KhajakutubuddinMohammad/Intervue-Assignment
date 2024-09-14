const express = require("express");
const { createPoll, getPollResults } = require("../controllers/pollController");
const router = express.Router();

router.post("/create", createPoll);
router.get("/results", getPollResults);

module.exports = router;
