const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.send({
    APIs: ["/book", "/book/:bookId", "/grade", "/grade/:gradeId"],
  });
});

module.exports = router;
