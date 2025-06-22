import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/customError";

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  console.warn(`Route not found: ${req.method} ${req.originalUrl}`);
  next(new ApiError(404, "Resource not found"));
};
export default notFoundHandler;
