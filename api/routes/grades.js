const express = require("express");
const grades = require("../data/grades.json");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(grades);
});

router.get("/:gradeId", (req, res, next) => {
  const { gradeId } = req.params;
  let response;
  grades.forEach((grade) => {
    if (grade.id === gradeId) response=grade;;
  })
  res.send(response);
});
;

module.exports = router;
