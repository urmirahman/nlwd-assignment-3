import { Request, Response } from "express";
import * as bookService from "./book.service";

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await bookService.createBookService(req.body);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: book,
    });
  } catch (error) {
    res
      .status(400)
      .json({ success: false, message: "Validation failed", error });
  }
};
