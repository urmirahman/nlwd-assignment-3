import { Schema, model, Document, Model } from "mongoose";
import { IBook } from "./book.interface";

interface BookModel extends Model<IBook> {
  decrementCopies(bookId: string, quantity: number): Promise<IBook>;
}

const bookSchema = new Schema<IBook, BookModel>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    genre: {
      type: String,
      required: [true, "Genre is required"],
      enum: {
        values: [
          "FICTION",
          "NON_FICTION",
          "SCIENCE",
          "HISTORY",
          "BIOGRAPHY",
          "FANTASY",
        ],
        message: "{VALUE} is not a valid genre",
      },
    },
    isbn: {
      type: String,
      required: [true, "ISBN is required"],
      unique: true,
    },
    description: {
      type: String,
    },
    copies: {
      type: Number,
      required: [true, "Copies is required"],
      min: [0, "Copies must be a non-negative integer"],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

bookSchema.pre<IBook>("save", function (next) {
  this.available = this.copies > 0;
  next();
});

bookSchema.post<IBook>("save", function (doc, next) {
  console.log(
    `Book "${doc.title}" (ID: ${doc._id}) was saved. Available: ${doc.available}`,
  );
  next();
});

bookSchema.statics.decrementCopies = async function (
  bookId: string,
  quantity: number,
) {
  const book = await this.findById(bookId);
  if (!book) throw new Error("Book not found");
  if (book.copies < quantity) throw new Error("Not enough copies available");

  book.copies -= quantity;
  return await book.save();
};

export const Book = model<IBook, BookModel>("Book", bookSchema);
