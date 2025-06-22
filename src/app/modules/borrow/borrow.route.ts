import express from "express";
import { borrowBook, getBorrowSummary } from "./borrow.controller";

const router = express.Router();

router.post("/book", borrowBook);
router.get("/", getBorrowSummary);

export default router;
