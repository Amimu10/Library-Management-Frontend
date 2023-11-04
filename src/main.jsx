import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './component/MainLayout';
import ErrorPage from './component/ErrorPage';
import Home from './component/Home';
import AddBook from './component/AddBook';
import AllBooks from './component/AllBooks';
import BorrowedBooks from './component/BorrowedBooks';
import Login from './component/Login';
import Register from './component/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addBook",
        element: <AddBook></AddBook>
      },
      {
        path: "/allBooks",
        element: <AllBooks></AllBooks>
      },
      {
        path: "/borrowedBook",
        element: <BorrowedBooks></BorrowedBooks>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
