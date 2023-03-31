import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../HomePage/HomePage";
import Mens from "../Mens Page/Mens";
import SingleProcuctPage from "../Mens Page/SingleProcuctPage";

const Routes_Path = [
  { path: "/", element: <HomePage /> },
  { path: "/MensPage", element: <Mens /> },
  // { path: "/WomensPage", element: <Womens /> },
  { path: "/MensPage/:id", element: <SingleProcuctPage /> },
];

const AllRoutes = () => {
  return (
    <Routes>
      {Routes_Path.map((el) => {
        return (
          <Route key={el.path} path={el.path} element={el.element}></Route>
        );
      })}
    </Routes>
  );
};

export default AllRoutes;
