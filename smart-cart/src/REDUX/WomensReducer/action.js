import React from 'react'
import {WOMENS_PRODUCT_REQUEST,WOMENS_PRODUCT_SUCCESS,WOMENS_PRODUCT_FAILURE} from "./actionTypes"
import axios from "axios"
export const productsArr = ()=>(dispatch) => {
    dispatch({type:WOMENS_PRODUCT_REQUEST})
        axios
.get("https://smart-cart-db.onrender.com/women").then((res)=>{
            console.log(res.data);
            dispatch({type:WOMENS_PRODUCT_SUCCESS,payload:res.data})
        }).catch(()=>{
            console.log("error");
            dispatch({type:WOMENS_PRODUCT_FAILURE})
        })
    
  return (
    <div>action</div>
  )
}
