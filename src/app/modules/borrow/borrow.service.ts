import { Borrow } from "./borrow.model";
import { Book } from "../book/book.model";

export const borrowBookService = async (data: {
  book: string;
  quantity: number;
  dueDate: Date;
}) => {
  const { book, quantity, dueDate } = data;

  await Book.decrementCopies(book, quantity);

  return await Borrow.create({ book, quantity, dueDate });
};

export const getBorrowedSummaryService = async () => {
  const pipeline = [
    {
      $group: {
        _id: "$book",
        totalQuantity: { $sum: "$quantity" },
      },
    },
    {
      $lookup: {
        from: "books",
        localField: "_id",
        foreignField: "_id",
        as: "bookDetails",
      },
    },
    { $unwind: "$bookDetails" },
    {
      $project: {
        book: {
          title: "$bookDetails.title",
          isbn: "$bookDetails.isbn",
        },
        totalQuantity: 1,
      },
    },
  ];
  return await Borrow.aggregate(pipeline);
};
