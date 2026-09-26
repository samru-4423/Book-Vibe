import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/errorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";
import PagesToRead from "../pagesToRead/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path:"/books",
        element: <Books></Books>
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: () => fetch('/booksData.json')
      },
      {
        path: "/pages-to-read",
        Component: PagesToRead
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
]);