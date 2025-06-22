# 📚 Library Management Backend

A robust RESTful API built with **Node.js**, **Express**, **TypeScript**, and **MongoDB** to manage books and borrowing records in a library system.

---

## 🌐 Live Links

- **GitHub Repository:** [Library Management Backend](https://github.com/urmirahmans-projects/nlwd-assignment-3)
- **Live Deployment:** [Library Management API](https://nlwd-assignment-3-theta.vercel.app/)
- **Video Explanation:** [Coming Soon](#)

---

## 🚀 Features

- **Books Management:** Add, update, delete, and retrieve books with availability tracking.
- **Borrowing System:** Borrow books, track quantities, and enforce availability rules.
- **Filtering & Sorting:** Flexible query parameters for filtering by genre, sorting, and limiting results but optinal so if all books need s fetch without filtering then it can be done.
- **Error Handling:** Centralized error handling with custom `ApiError` for validation and runtime errors.
- **Aggregation Pipeline:** Efficient data aggregation for borrowed books summary and all books .
- **Vercel Deployment:** Fully optimized for serverless deployment on Vercel using vercel CLI.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Language:** TypeScript
- **Development Tools:** Nodemon, dotenv
- **Deployment:** Vercel (serverless functions)

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/urmirahman/nlwd-assignment-3.git
cd nlwd-assignment-3
npm install
```

### ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5001
MONGODB_URI=your-mongodb-url
```

---

## 📘 API Documentation

This API provides endpoints for managing books and borrowing records in a library system.

---

### 📚 Book Endpoints

#### ➕ Create a Book

- **Method:** `POST`
- **URL:** `/api/books`
- **Request Body:**

```json
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "genre": "FANTASY",
  "isbn": "9780547928227",
  "description": "A fantasy novel set in Middle-earth.",
  "copies": 10
}
```

#### ✅ Successful Response

```json
{
  "success": true,
  "message": "Book created successfully",
  "data": {
    "_id": "book_id",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "genre": "FANTASY",
    "isbn": "9780547928227",
    "description": "A fantasy novel set in Middle-earth.",
    "copies": 10,
    "available": true,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

---

#### 🔍 Get All Books

- **Method:** `GET`
- **URL:** `/api/books`

##### Query Parameters (optional)

- `filter`: Filter by genre (`FICTION`, `NON_FICTION`, `SCIENCE`, `HISTORY`, `BIOGRAPHY`, `FANTASY`)
- `sortBy`: Field to sort by (`createdAt`, `title`, `author`, etc.)
- `sort`: `asc` or `desc`
- `limit`: Number of results to return (default: `10`)

##### Example Request

```bash
/api/books?filter=SCIENCE&sortBy=createdAt&sort=desc&limit=5
```

#### ✅ Successful Response

```json
{
  "success": true,
  "message": "Books retrieved successfully",
  "data": [
    {
      "_id": "book_id",
      "title": "A Brief History of Time",
      "author": "Stephen Hawking",
      "genre": "SCIENCE",
      "isbn": "9780553380163",
      "description": "An introduction to cosmology and the nature of the universe.",
      "copies": 6,
      "available": true,
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
  ]
}
```

---

#### 📕 Get a Book by ID

- **Method:** `GET`
- **URL:** `/api/books/:bookId`

#### ✅ Successful Response

```json
{
  "success": true,
  "message": "Book retrieved successfully",
  "data": {
    "_id": "book_id",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "genre": "FANTASY",
    "isbn": "9780547928227",
    "description": "A fantasy novel set in Middle-earth.",
    "copies": 10,
    "available": true,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

---

#### 📝 Update a Book

- **Method:** `PATCH`
- **URL:** `/api/books/:bookId`
- **Request Body:** (any updatable fields)

```json
{
  "copies": 15
}
```

#### ✅ Successful Response

```json
{
  "success": true,
  "message": "Book updated successfully",
  "data": {
    "_id": "book_id",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "genre": "FANTASY",
    "isbn": "9780547928227",
    "description": "Updated description",
    "copies": 15,
    "available": true,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

---

#### ❌ Delete a Book

- **Method:** `DELETE`
- **URL:** `/api/books/:bookId`

#### ✅ Response

```json
{
  "success": true,
  "message": "Book deleted successfully",
  "data": null
}
```

---

### 📖 Borrow Endpoints

#### ➕ Borrow a Book

- **Method:** `POST`
- **URL:** `/api/borrow`

#### Request Body

```json
{
  "book": "book_id",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```

#### ✅ Response

```json
{
  "success": true,
  "message": "Book borrowed successfully",
  "data": {
    "_id": "borrow_id",
    "book": "book_id",
    "quantity": 2,
    "dueDate": "2025-07-18T00:00:00.000Z",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

---

#### 📖 Borrowed Books Summary

- **Method:** `GET`
- **URL:** `/api/borrow`

#### ✅ Response

```json
{
  "success": true,
  "message": "Borrowed books summary retrieved successfully",
  "data": [
    {
      "bookTitle": "1984",
      "isbn": "9780451524935",
      "totalBorrowed": 15
    },
    {
      "bookTitle": "The Great Gatsby",
      "isbn": "9780743273565",
      "totalBorrowed": 9
    },
    {
      "bookTitle": "Pride and Prejudice",
      "isbn": "9780141439518",
      "totalBorrowed": 7
    }
  ]
}
```

---

## 🛠️ Deployment

### Local Development

```bash
npm run dev
```

### Production Deployment

```bash
vercel --prod
```
