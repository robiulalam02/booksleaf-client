import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import BookDetails from "../components/BookDetails/BookDetails";
import Bookshelf from "../components/Bookshelf/Bookshelf";
import AddBook from "../components/AddBook/AddBook";
import MyBooks from "../components/MyBooks/MyBooks";
import UpdateBook from "../components/UpdateBook/UpdateBook";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path: '/bookshelf',
          Component: Bookshelf
        },
        {
          path: '/addbook',
          Component: AddBook
        },
        {
          path: '/mybooks',
          Component: MyBooks
        },
        {
          path: '/updatebook/:id',
          Component: UpdateBook,
          loader: ({params}) => fetch(`http://localhost:3000/books/${params.id}`)
        },
        {
          path: '/auth/login',
          Component: Login
        },
        {
          path: '/auth/register',
          Component: Register
        },
        {
          path: '/bookDetails/:id',
          Component: BookDetails,
          loader: ({params}) => fetch(`http://localhost:3000/books/${params.id}`)
        }
    ]
  },
]);