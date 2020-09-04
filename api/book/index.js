const express = require("express");
const books= require('./books.json')
const router = express.Router();

/* GET book cover. */
router.get("/:bookId", (req, res, next) => {
  const {bookId} = req.params;
  res.send(_fetchBook(bookId));
});

const _fetchBook = (bookId) => {
  if (books[bookId]) return books[bookId];
  else return "Book not found"
};

module.exports = router;
