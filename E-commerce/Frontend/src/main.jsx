import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/style.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./components/Products.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Featured from "./components/Featured.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Cart from "./pages/Cart.jsx";
import SetPassword from "./components/SetPassword.jsx";
import SuccessPassMsg from "./components/SuccessPassMsg.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import UpdatePassword from "./components/updatePassword.jsx";
import Checkout from "./pages/Checkout.jsx";
import SuccessPayment from "./components/SuccessPayment.jsx";
import CancelPayment from "./components/CancelPayment.jsx";
import Invoice from "./components/Invoice.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Products /> },
      { path: "/shop", element: <Shop /> },
      { path: "/contact", element: <Contact /> },
      { path: "/details/:id", element: <ProductDetail /> },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/update-password",
        element: <UpdatePassword />,
      },
      {
        path: "/dashboard/user",
        element: <Dashboard />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard/admin",
        element: <AdminDashboard />,
      },
    ],
  },
  {
    path: "/set-password/:id",
    element: <SetPassword />,
  },
  {
    path: "/success-msg",
    element: <SuccessPassMsg />,
  },
  {
    path: "/success-payment",
    element: <SuccessPayment />,
  },
  {
    path: "/cancel-payment",
    element: <CancelPayment />,
  },
  {
    path: "/invoice",
    element: <Invoice />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
