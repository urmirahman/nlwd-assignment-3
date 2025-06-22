import { Book } from "./book.model";

export const createBookService = async (payload: any) => {
  return await Book.create(payload);
};

export const getAllBooksService = async (query: any = {}) => {
  const filter: any = {};
  if (query.filter) {
    filter.genre = query.filter;
  }

  const sort: any = {};
  if (query.sortBy) {
    sort[query.sortBy] = query.sort === "desc" ? -1 : 1;
  }

  const limit = query.limit ? parseInt(query.limit, 10) : 10;

  const useAggregation =
    query.useAggregate === "true" || query.useAggregate === true;

  if (useAggregation) {
    const pipeline = [{ $match: filter }, { $sort: sort }, { $limit: limit }];
    return await Book.aggregate(pipeline);
  } else {
    return await Book.find(filter).sort(sort).limit(limit);
  }
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
