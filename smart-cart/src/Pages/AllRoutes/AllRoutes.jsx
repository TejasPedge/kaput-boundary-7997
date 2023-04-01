import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../Components/Login";
import PrivateRoute from "../../Components/Private";
import Signup from "../../Components/Signup";
import { HomePage } from "../HomePage/HomePage";
import { UpperNavbar } from "../HomePage/UpperNavbar";
import Mens from "../Mens Page/Mens";
import Paymentpage from "../HomePage/Paymentpage";
import SingleProcuctPage from "../Mens Page/SingleProcuctPage";
import Cart from './../Mens Page/Cart';

const Routes_Path = [
  { path: "/", element: <HomePage /> },
  { path: "/MensPage", element:<Mens />},
  {path:"/login",element:<Login/>},
  {path:"/signup",element:<Signup/>},
  {path:"/payment",element:<Paymentpage/>},
  // { path: "/WomensPage", element: <Womens /> },
  { path: "/MensPage/:id", element: <SingleProcuctPage /> },
  { path: "/Cart", element: <Cart /> },
];

const AllRoutes = () => {
  return (
    <>
    <UpperNavbar/>
    <Routes>
      {Routes_Path.map((el) => {
        return (
          <Route key={el.path} path={el.path} element={el.element}></Route>
        );
      })}
    </Routes></>
  );
};

export default AllRoutes;
