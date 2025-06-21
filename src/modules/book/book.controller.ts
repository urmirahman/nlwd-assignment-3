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

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookService.getAllBooksService(req.query);
    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to retrieve books",
      error,
    });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const book = await bookService.getBookByIdService(id);
    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: "Book not found",
      error: error.message,
    });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedBook = await bookService.updateBookService(id, req.body);
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Book update failed",
      error: error.message,
    });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await bookService.deleteBookService(id);
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "Book deletion failed",
      error: error.message,
    });
  }
};
