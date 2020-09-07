const express = require("express");
const grades = require("../data/grades.json");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(grades);
});

router.get("/:gradeId", (req, res, next) => {
  const { gradeId } = req.params;
  res.send(_fetchGrade(gradeId));
});

const _fetchGrade = (gradeId) => {
  return grades.map((grade) => {
    if (grade.id === gradeId) return grade;
    else return "Grade not found";
  });
};

module.exports = router;
