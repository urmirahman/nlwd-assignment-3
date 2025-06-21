import { Book } from "./book.model";

export const createBookService = async (payload: any) => {
  return await Book.create(payload);
};

export const getAllBooksService = async (filter = {}) => {
  return await Book.find(filter);
};

export const getBookByIdService = async (id: string) => {
  return await Book.findById(id);
};

export const updateBookService = async (id: string, payload: any) => {
  return await Book.findByIdAndUpdate(id, payload, { new: true });
};

export const deleteBookService = async (id: string) => {
  return await Book.findByIdAndDelete(id);
};
