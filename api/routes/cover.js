const express = require("express");
const router = express.Router();
const { fetchCover } = require("../controllers/cover");

/* GET book cover. */
router.get("/", (req, res, next) => {
  res.send(fetchCover());
});

module.exports = router;
