# 📚 Virtual Bookshelf

A modern web application that allows book lovers to create a personal digital bookshelf. Users can add books, track reading progress, post reviews, upvote popular books, and explore community favorites — all in a beautifully responsive UI.

---

## 🌐 Live Site

**Client-Site:** [https://booksleaf-7a4b5.web.app/](https://booksleaf-7a4b5.web.app/)  

---

## 🎯 Project Purpose

This project was developed as part of **Assignment 11 (Assignment Category 19)** to demonstrate full-stack development skills using the **MERN** stack along with **Firebase Authentication**, smooth UI transitions, and secure deployment practices.

The app helps readers organize their reading journey with features like reading status tracking, community reviews, and bookshelf statistics.

---

## 🚀 Key Features

### 👤 Authentication
- Email/password and Google login via Firebase
- Protected routes (Add Book, My Books, Profile)
- JWT token for route-level access control

### 📚 Books Management
- Add new books with rich metadata (title, author, pages, category, overview)
- Filter and search books by title, author, and reading status
- See detailed book information with upvote and review features

### 📈 Reading Tracker
- Track reading progress: *Want-to-Read → Reading → Read*
- Only the book owner can update the reading status
- Progress updates sync instantly with the backend via PATCH request

### 💬 Reviews
- Authenticated users can write, edit, or delete one review per book
- All reviews display publicly under each book

### 🔼 Upvote System
- Authenticated users can upvote others’ books
- Real-time upvote count
- Users cannot upvote their own added books

### 📊 Profile Dashboard
- Displays user info (name, email, photo)
- Shows bookshelf summary and book category distribution via chart

### 🖼️ Design & UI
- Responsive layout for desktop, tablet, and mobile using Tailwind CSS
- Smooth animations with Framer Motion
- Clean and modern design inspired by Goodreads & Dribbble UIs

---

## 📦 NPM Packages Used

### Client
- **react-router-dom** – Routing and protected routes
- **axios** – API communication
- **framer-motion** – Page transitions and animations
- **firebase** – Authentication
- **react-icons** – Icons
- **recharts** – Charting in Profile page
- **sweetalert2** / **react-hot-toast** – Alert and toast notifications
- **dotenv** – For env-based secure config
- **react-tostify** – for stylish success/error messages

### Server
- **express** – Backend server
- **mongoose** – MongoDB ODM
- **cors** – Handle CORS policies
- **dotenv** – Environment variable handling
- **jsonwebtoken** – JWT handling

---

## 🛠️ Tech Stack

| Area       | Technology           |
|------------|----------------------|
| Frontend   | React + Tailwind CSS + Framer Motion |
| Backend    | Node.js + Express + MongoDB |
| Auth       | Firebase (email/password + Google) |
| Deployment | Vercel (client + server) |

---

## 🗂️ Folder Structure (Client)

src/
│
├── components/ # Navbar, Footer, BookCard, ReviewCard, etc.
├── pages/ # Home, Bookshelf, BookDetails, AddBook, MyBooks, Profile, Login, Register
├── hooks/ # Custom hooks (e.g., useAuth, useFetch)
├── routes/ # All route definitions
├── contexts/ # Auth context, loading context
└── utils/ # JWT helpers, protected route logic

## ✨ Author

**MD. Robiul Alam**  
MERN Stack Developer
Email: robiulbusiness02@gmail.com 
Linkedin: [linkedin profile](https://www.linkedin.com/in/shopneel10/)
