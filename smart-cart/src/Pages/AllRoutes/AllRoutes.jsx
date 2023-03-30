import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Routes_Path = [
    {path : '', element : ''},
];


const AllRoutes = () => {
  return (
    <Routes>

        {Routes_Path.map((el) => {

            return <Route key = {el.path} path = {el.path} element = {el.element}></Route>

        })}

    </Routes>
  )
}

export default AllRoutes