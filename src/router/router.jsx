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
import Profile from "../components/Profile/Profile";
import Private_Route from "./Private_Route";

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
          element: <Private_Route>
            <AddBook />
          </Private_Route>
        },
        {
          path: '/mybooks',
          element: <Private_Route>
            <MyBooks />
          </Private_Route>
        },
        {
          path: '/profile',
          element: <Private_Route>
            <Profile />
          </Private_Route>
        },
        {
          path: '/updatebook/:id',
          element: <Private_Route>
            <UpdateBook />
          </Private_Route>,
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
          element: <Private_Route>
            <BookDetails />
          </Private_Route>,
          loader: ({params}) => fetch(`http://localhost:3000/books/${params.id}`)
        }
    ]
  },
]);