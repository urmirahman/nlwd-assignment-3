import express from "express";
import { createBook } from "./book.controller";

const router = express.Router();

router.post("/", createBook);
// TODO if needed: GET /, GET /:id, PUT /:id, DELETE /:id

export default router;
