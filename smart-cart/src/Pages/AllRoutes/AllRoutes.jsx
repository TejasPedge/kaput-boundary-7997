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
import SingleWomenPage from "../WomensPage/SingleProcuctPage";

import Cart from './../Mens Page/Cart';
import Adminpage from "../HomePage/Admin/Adminpage";
import ADD from "../HomePage/Admin/ADD";
import Delete from "../HomePage/Admin/Delete";
import Update from "../HomePage/Admin/Update";
import Womens from "../WomensPage/Womens";
import AdminLogin from "../HomePage/Admin/AdminLogin";
const Routes_Path = [
  { path: "/", element: <HomePage /> },
  { path: "/MensPage", element:<Mens />},
  {path:"/login",element:<Login/>},
  {path:"/signup",element:<Signup/>},
  {path:"/payment",element:<PrivateRoute><Paymentpage/></PrivateRoute>},
  { path: "/womensPage", element: <Womens /> },
  { path: "/womensPage/:id", element: <SingleWomenPage /> },
  { path: "/MensPage/:id", element: <SingleProcuctPage /> },
  {path:"/admin",element:<Adminpage/>},
  {path:"/Dashboard",element:<Adminpage/>},
  {path:"/ADDProduct",element:<ADD/>},
  {path:"/DeleteProduct",element:<Delete/>},
  {path:"/UpdateProduct",element:<Update/>},
  {path:"/adminlogin",element:<AdminLogin/>},
  
  
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
