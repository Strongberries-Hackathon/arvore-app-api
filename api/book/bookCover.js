const express = require("express");
const router = express.Router();

/* GET book cover. */
router.get("/", (req, res, next) => {
  res.send(_fetchCover());
});

const _fetchCover = () => {
  return {
    title: "The Friendly Creeper Diaries (Book 1): The Creeper Village",
    sutitle: "An Unofficial Minecraft Diary Book for Kids Ages 9 - 12 (Preteen)",
    author: "Mark Mulle",
    coverPicture: "/images/book/cover.jpeg",
  };
};

module.exports = router;
