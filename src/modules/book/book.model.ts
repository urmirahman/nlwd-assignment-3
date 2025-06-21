import { Schema, model } from "mongoose";

const genreEnum = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true, enum: genreEnum },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true },
  },
  { timestamps: true },
);

bookSchema.statics.decrementCopies = async function (
  bookId: string,
  quantity: number,
) {
  const book = await this.findById(bookId);
  if (!book) throw new Error("Book not found");
  if (book.copies < quantity) throw new Error("Not enough copies");
  book.copies -= quantity;
  if (book.copies === 0) book.available = false;
  return await book.save();
};

export const Book = model("Book", bookSchema);
