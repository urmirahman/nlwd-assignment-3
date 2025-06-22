```markdown
# 📚 Library Management API

A RESTful Library Management System built using **Express**, **TypeScript**, and **MongoDB (Mongoose)**. This API allows users to create, retrieve, update, delete, and borrow books, with robust validation, aggregation logic, and clean architecture (Model → Service → Controller → Route).

---

## 🚀 Features

- ✅ Book creation with strict schema validation
- ✅ Borrowing books with quantity & availability checks
- ✅ Aggregated summary of borrowed books
- ✅ Filtering, sorting, and pagination support
- ✅ Mongoose statics, instance methods, and middleware
- ✅ Clean error handling with centralized logic
- ✅ Modular code structure with services and controllers

---

## 🏗️ Tech Stack

- **Backend**: Node.js, Express
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Dev Tools**: ts-node-dev, Dotenv, Cors, Postman/Thunder Client

---

## 📁 Project Structure
```

src/
├── app.ts # Express setup
├── server.ts # Application bootstrap
├── config/db.ts # MongoDB connection
├── modules/
│ ├── book/ # Book module (CRUD)
│ └── borrow/ # Borrow module (borrow & summary)
├── routes/index.ts # API routing
├── middleware/ # Global error handler
├── utils/customError.ts # APIError class
├── types/ # Global types (optional)

````

---

## 🧪 API Endpoints

### 📘 Book

| Method | Endpoint             | Description             |
|--------|----------------------|-------------------------|
| POST   | `/api/books`         | Create a new book       |
| GET    | `/api/books`         | Get all books           |
| GET    | `/api/books/:id`     | Get book by ID          |
| PUT    | `/api/books/:id`     | Update a book's data    |
| DELETE | `/api/books/:id`     | Delete a book           |

**Query Parameters**: `?filter=GENRE&sortBy=createdAt&sort=desc&limit=5`

---

### 🔄 Borrow

| Method | Endpoint        | Description                                |
|--------|-----------------|--------------------------------------------|
| POST   | `/api/borrow`   | Borrow book(s), updates stock/availability |
| GET    | `/api/borrow`   | Get borrowed summary via aggregation       |

---

## 📦 Installation

```bash
git clone https://github.com/your-username/library-api.git
cd library-api
npm install
````

Create a `.env` file:

```
PORT=5000
DATABASE_URL=mongodb://localhost:27017/library-api
```

---

## 🛠️ Running the Project

```bash
npm run dev
```

---

## 🧪 Testing (Example Request)

```http
POST /api/books
Content-Type: application/json

{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5
}
```

---

## 🧩 Bonus Implementations

- ✅ Custom `ApiError` class and error middleware
- ✅ Mongoose static method `decrementCopies()` for borrowing logic
- ✅ Aggregation pipeline with `$group`, `$lookup`, `$unwind`, `$project`
- ✅ Timestamp fields (`createdAt`, `updatedAt`)
- ✅ Proper 404 and validation error responses

---

## 🎥 Video Demo

📺 [Watch video walkthrough here](https://your-video-link.com)

---

## 🌐 Live API (Optional Deployment)

🔗 [https://your-deployment-link.com](https://your-deployment-link.com)

---

## 👩‍💻 Author

**Urmi** — Mentor & developer passionate about empowering others through clean, practical code.

---

## 📜 License

This project is for educational purposes. All rights reserved.
