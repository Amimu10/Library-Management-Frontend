import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./component/MainLayout";
import ErrorPage from "./component/ErrorPage";
import Home from "./component/Home";
import AddBook from "./component/AddBook";
import AllBooks from "./component/AllBooks";
import BorrowedBooks from "./component/BorrowedBooks";
import Login from "./component/Login";
import Register from "./component/Register";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import UpdateBook from "./component/UpdateBook";
import CategoryData from "./component/CategoryData";
import BookDetails from "./component/BookDetails";
import ReadBooks from "./component/ReadBooks";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { 
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addBook",
        element: <AddBook></AddBook> 
      },

      {
        path: "/allBooks", 
        element: <AllBooks></AllBooks>,
        loader: () => fetch("http://localhost:5000/books"),    
      },     
      {
        path: "/showCategory/:category",  
        element: <CategoryData></CategoryData>,  
        loader: ({params}) => {
          console.log(params) 
          return fetch(`http://localhost:5000/bookscategory/${params.category}`)                 

      }
      },    
      {
        path: "/bookDetails/:id",  
        element: <BookDetails></BookDetails>, 
        loader: ({params}) => {
          console.log(params) 
          return fetch(`http://localhost:5000/bookDetails/${params.id}`)                 
      }
      },    
      {
        path: "/readBook/:id",  
        element: <ReadBooks></ReadBooks>, 
        loader: ({params}) => {
          console.log(params) 
          return fetch(`http://localhost:5000/readBook/${params.id}`)                 
      }
      },    
      {
        path: "/updateBooks/:id",
        element: <UpdateBook></UpdateBook>, 
        loader: ({ params }) => {
         return  fetch(`http://localhost:5000/books/${params.id}`) 
        } 
        }, 
      {
        path: "/borrowedBook",
        element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
      }, 
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
