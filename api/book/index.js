const express = require("express");
const books = require("../book/books.json");
const router = express.Router();

router.get("/:bookId", (req, res, next) => {
  const { bookId } = req.params;
  res.send(_fetchBook(bookId));
});

router.get("/", (req, res, next) => {
  res.send(books);
});

const _fetchBook = (bookId) => {
  try {
    return books[bookId];
  } catch (err) {
    return "Book not found";
  }
};

module.exports = router;
