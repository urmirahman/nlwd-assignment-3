import express from "express";
import { borrowBook, getBorrowSummary } from "./borrow.controller";

const router = express.Router();

router.post("/", borrowBook);
router.get("/", getBorrowSummary);

export default router;
