import { Schema, model, Document, Model } from "mongoose";

// 1. Define an interface for your document
interface IBook extends Document {
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description?: string;
  copies: number;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Define an interface for static methods
interface BookModel extends Model<IBook> {
  decrementCopies(bookId: string, quantity: number): Promise<IBook>;
}

// 3. Create the schema
const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
      type: String,
      required: true,
      enum: [
        "FICTION",
        "NON_FICTION",
        "SCIENCE",
        "HISTORY",
        "BIOGRAPHY",
        "FANTASY",
      ],
    },
    isbn: { type: String, required: true, unique: true },
    description: String,
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true },
  },
  { timestamps: true },
);

// 4. Implement the static method
bookSchema.statics.decrementCopies = async function (
  bookId: string,
  quantity: number,
) {
  const book = await this.findById(bookId);
  if (!book) throw new Error("Book not found");
  if (book.copies < quantity) throw new Error("Not enough copies");

  book.copies -= quantity;
  book.available = book.copies > 0;
  return await book.save();
};

// 5. Export the properly typed model
export const Book = model<IBook, BookModel>("Book", bookSchema);
