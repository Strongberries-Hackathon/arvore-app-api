var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({
    APIs: ["/books", "/books/:bookId", "/grades", "/grades/:gradeId"],
  });
});

module.exports = router;
