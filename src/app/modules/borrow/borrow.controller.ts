import { Request, Response } from "express";
import * as borrowService from "./borrow.service";

export const borrowBook = async (req: Request, res: Response) => {
  try {
    const result = await borrowService.borrowBookService(req.body);
    res.status(201).json({
      success: true,
      message: "Book borrowed successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: "Borrowing failed",
      error: err.message,
    });
  }
};

export const getBorrowSummary = async (_req: Request, res: Response) => {
  try {
    const summary = await borrowService.getBorrowedSummaryService();
    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve summary",
      error: err.message,
    });
  }
};
