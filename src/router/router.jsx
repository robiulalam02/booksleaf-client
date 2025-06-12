import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import BookDetails from "../components/BookDetails/BookDetails";

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