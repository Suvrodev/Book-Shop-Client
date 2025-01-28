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
import UserDashboard from "../Layout/UserDashboard/UserDashboard";
import MyBook from "../Pages/MyBook/MyBook";
import MyOrder from "../Pages/MyOrder/MyOrder";
import AdminProtectedRoute from "../Layout/AdminProtectedRoute";
import AdminDashboard from "../Layout/AdminDashboard/AdminDashboard";
import UserManagement from "../Pages/AdminPages/UserManagement/UserManagement";
import CreateAbout from "../Pages/AdminPages/CreateAbout/CreateAbout";
import OrderManagement from "../Pages/AdminPages/OrderManagement/OrderManagement";
import PaymentSuccessfull from "../Pages/SharedPage/Payment/PaymentSuccessfull";
import PaymentUnSuccessfull from "../Pages/SharedPage/Payment/PaymentUnSuccessfull";
import LoadingPage from "../component/LoadingPage/LoadingPage";

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
        path: "about-us",
        element: <AboutUS />,
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
    path: "user-dashboard",
    element: (
      <ProtectedRoute>
        <UserDashboard />{" "}
      </ProtectedRoute>
    ),
    children: [
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: "user-add-book",
        element: <AddBook />,
      },
      {
        path: "user-book",
        element: <MyBook />,
      },
      {
        path: "user-cart",
        element: <MyCart />,
      },
      {
        path: "user-order",
        element: <MyOrder />,
      },
    ],
  },
  {
    path: "admin-dashboard",
    element: (
      <AdminProtectedRoute>
        <AdminDashboard />
      </AdminProtectedRoute>
    ),
    children: [
      {
        path: "user-profile",
        element: <UserProfile />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "order-management",
        element: <OrderManagement />,
      },

      {
        path: "create-about",
        element: <CreateAbout />,
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
  {
    path: "success-pay/:transactionId",
    element: <PaymentSuccessfull />,
  },
  {
    path: "unsuccess-pay/:transactionId",
    element: <PaymentUnSuccessfull />,
  },
  {
    path: "loading",
    element: <LoadingPage />,
  },
]);
