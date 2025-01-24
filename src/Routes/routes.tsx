import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import AllProducts from "../Pages/AllProducts/AllProducts";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import AboutUS from "../Pages/AboutUS/AboutUS";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import TermsAndCondition from "../Pages/TermsAndCondition/TermsAndCondition";

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
        path: "all-products",
        element: <AllProducts />,
      },
      {
        path: "product-detail",
        element: <ProductDetail />,
      },
      {
        path: "about-us",
        element: <AboutUS />,
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
