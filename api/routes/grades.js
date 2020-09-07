const express = require("express");
const grades = require("../data/grades.json");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(grades);
});

module.exports = router;
