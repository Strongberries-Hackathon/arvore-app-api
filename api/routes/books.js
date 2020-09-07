const express = require("express");
const books = require("../data/books.json");
const router = express.Router();

router.get("/:bookId", (req, res, next) => {
  const { bookId } = req.params;
  let response;
  books.forEach((book) => {
    if (book.id === bookId) response=book;;
  })
  res.send(response);
});

router.get("/", (req, res, next) => {
  res.send(books);
});

module.exports = router;
