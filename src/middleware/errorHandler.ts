// src/middleware/errorHandler.ts
import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/customError";

const errorHandler = (
  err: ApiError,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    error: {
      name: err.name,
      message: err.message,
      stack: process.env.NODE_ENV !== "production" ? err.stack : undefined,
    },
  });
};

export default errorHandler;
