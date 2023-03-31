import { signupfail,signupreq,signupsuccess } from "./actionType"
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom"
import { Alert } from "@chakra-ui/react"


export const signuprequest=()=>{
    return {type:signupreq}
}
export const signupsucc=()=>{
    return {type:signupsuccess}
}
export const signupfailed=()=>{
    return {type:signupfail}
}

export const signup=(obj)=>(dispatch)=>{
    console.log(obj)
    const{id, firstname,lastname,password}=obj
    if(id&&firstname&&password&&lastname){

    
    dispatch(signuprequest())
return axios.post("https://smart-cart-db.onrender.com/logindata",obj).then((res)=>{
        // console.log(res)
       
        dispatch(signupsucc())
     
    })
}}
export const setdata=(key,value)=>{
    localStorage.setItem((key,JSON.stringify(value)))
}
export const getdata=(key)=>{
    const x=JSON.parse(localStorage.getItem(key))
    return x
}