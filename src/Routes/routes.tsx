import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import AboutUS from "../Pages/AboutUS/AboutUS";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";
import AddBook from "../Pages/AddBook/AddBook";
import ProtectedRoute from "../Layout/ProtectedRoute";
import AllBooks from "../Pages/AllBooks/AllBooks";
import BookDetail from "../Pages/BookDetail/BookDetail";
import MyCart from "../Pages/MyCart/MyCart";
import UserProfile from "../Pages/UserProfile/UserProfile";

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
        path: "mycart",
        element: <MyCart />,
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
        path: "user-profile",
        element: (
          <ProtectedRoute>
            {" "}
            <UserProfile />
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
