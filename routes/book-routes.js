const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controllers/book-controllers");


router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);

module.exports = router;