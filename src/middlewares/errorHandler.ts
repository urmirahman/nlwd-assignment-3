import { NextFunction, Request, Response } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  if (err.name === "ValidationError") {
    statusCode = 400;

    const errors = Object.values(err.errors).map((error: any) => error.message);
    message = errors.join(", ");
  }

  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid parameter format";
  }

  res.status(statusCode).json({
    success: false,
    message,
    error: {
      name: err.name || "Error",
      message,
      statusCode,
      stack: process.env.NODE_ENV !== "production" ? err.stack : undefined,
    },
  });
};

export default errorHandler;
