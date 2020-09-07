const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.json({
    APIs: {
      book: { book: "bookId" },
      grade: { grade: "gradeId" },
      activity: {
        activity: "activityId",
        "activity/upload": "photo/studant_id",
      },
    },
  });
});

module.exports = router;