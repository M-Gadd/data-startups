const express = require("express");
const { getStartups } = require("./startups");
const router = express.Router();

router.get("/startups", getStartups);

module.exports = router;
