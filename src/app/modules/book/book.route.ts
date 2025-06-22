import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookById,
  updateBook,
} from "./book.controller";

const router = express.Router();

router.get("/", getAllBooks);
router.post("/create", createBook);
router.get("/:id", getBookById);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
