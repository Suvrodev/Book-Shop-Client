import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import AboutUS from "../Pages/AboutUS/AboutUS";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
import AddBook from "../Pages/AddBook/AddBook";
import ProtectedRoute from "../Layout/ProtectedRoute";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BookDetail from "../Pages/BookDetail/BookDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "all-books",
        element: <AllBooks />,
      },
      {
        path: "product-detail",
        element: <ProductDetail />,
      },
      {
        path: "about-us",
        element: <AboutUS />,
      },
      {
        path: "add-book",
        element: (
          <ProtectedRoute>
            {" "}
            <AddBook />
          </ProtectedRoute>
        ),
      },
      {
        path: "book-detail/:_id",
        element: <BookDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "registration",
    element: <Registration />,
  },
  {
    path: "terms-and-condition",
    element: <TermsAndCondition />,
  },
]);
