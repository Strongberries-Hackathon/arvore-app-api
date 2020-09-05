const express = require("express");
const grades = require("./grades.json");
const router = express.Router();

/* GET book cover. */
router.get("/:gradeId", (req, res, next) => {
  const { gradeId } = req.params;
  res.send(_fetchGrade(gradeId));
});

router.get("/", (req, res, next) => {
  res.send(grades);
});

const _fetchGrade = (gradeId) => {
  try {
    return grades[gradeId];
  } catch (err) {
    return "Grade not found";
  }
};

module.exports = router;
