var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ book: '/book', bookCover: "/bookCover", activity: "/activity", completeActivity:  '/complete'});
});

module.exports = router;
