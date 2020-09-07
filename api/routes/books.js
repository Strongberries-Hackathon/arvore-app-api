const express = require("express");
const books = require("../data/books.json");
const router = express.Router();

router.get("/:bookId", (req, res, next) => {
  const { bookId } = req.params;
  res.send(_fetchBook(bookId));
});

router.get("/", (req, res, next) => {
  res.send(books);
});

const _fetchBook = (bookId) => {
  return books.map((book) => {
    if (book.id === bookId) return book;
    else return "Book not found";
  });
};

module.exports = router;
