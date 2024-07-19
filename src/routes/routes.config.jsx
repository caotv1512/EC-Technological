import Header from "../components/header/Header";
import Router from "../layouts/router/Router";
import RouterCart from "../layouts/router/RouterCart";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import Cart from "../pages/cart/Cart";
import Computer from "../pages/category/computer/Computer";
import Smart from "../pages/category/smart/Smart";
import Watch from "../pages/category/watch/Watch";
import HomePage from "../pages/homePage/HomePage";
import ProductDetail from "../pages/productDetail/ProductDetail";

const routesConfig = [
  {
    path: "/",
    element: <Router />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/productDetail/:id",
    element: <Router />,
    children: [
      {
        path: "",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/cart",
    element: <RouterCart></RouterCart>,
    children: [
      {
        path: "",
        element: <Cart></Cart>,
      },
    ],
  },
  {
    path: "/Smart",
    element: <Router></Router>,
    children: [
      {
        path: "",
        element: <Smart></Smart>,
      },
    ],
  },
  {
    path: "/Watch",
    element: <Router></Router>,
    children: [
      {
        path: "",
        element: <Watch></Watch>,
      },
    ],
  },
  {
    path: "/Computer",
    element: <Router></Router>,
    children: [
      {
        path: "",
        element: <Computer></Computer>,
      },
    ],
  },
  {
    path: "/auth/dangnhap",
    element: <SignIn></SignIn>,
  },
  {
    path: "/auth/dangky",
    element: <SignUp></SignUp>,
  },
];

export default routesConfig;
