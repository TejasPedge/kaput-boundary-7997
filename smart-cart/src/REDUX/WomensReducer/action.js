import React from 'react'

export const productsArr = () => {
    dispatch({type:WOMENS_PRODUCT_REQUEST})
    const getData=()=>{
        axios.get(" http://localhost:8080/women").then((res)=>{
            console.log(res.data);
            dispatch({type:WOMENS_PRODUCT_SUCCESS,payload:res.data})
        }).catch(()=>{
            console.log("error");
            dispatch({type:WOMENS_PRODUCT_FAILED})
        })
    }
  return (
    <div>action</div>
  )
}
