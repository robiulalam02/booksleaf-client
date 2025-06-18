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
import Loading from "../components/Loading/Loading";
import ErrorPage from "../Error/ErrorPage";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

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
        Component: Bookshelf,
        loader: () => fetch('https://books-leaf-server.vercel.app/books'),
        hydrateFallbackElement: <Loading />
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
        </Private_Route>
      },
      {
        path: '/updatebook/:id',
        Component: UpdateBook,
        loader: ({params})=> fetch(`https://books-leaf-server.vercel.app/books/${params.id}`)
      }
    ]
  },
  {
    path: '*',
    Component: ErrorPage
  }
]);