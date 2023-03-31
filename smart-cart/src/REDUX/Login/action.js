import { loginreq,loginsucc,loginfail } from "./actionTypes"
import axios from "axios"
export const loginrequest=()=>{
    return {type:loginreq}
}
export const loginsuccess=()=>{
    return {type:loginsucc}
}
export const loginfailed=()=>{
    return {type:loginfail}
}
export const login=(obj)=>(dispatch)=>{
    const{id,password}=obj


    dispatch(loginrequest())
   return axios.get(`https://smart-cart-db.onrender.com/logindata/${id}`).then((res)=>{
     
  
        if(res.data.id!==id &&res.data.password!==password){
            alert("please check the details")       
        }
 if((res.data.password==password)&&(res.data.id==id)){
        dispatch(loginsuccess())
        alert("login success")

    }
    else{
        alert("!please check the details once")
        return
    }
   


    }).catch((error)=>{
        
        alert("Please Provide Right Details")
        dispatch(loginfailed())})

}


export const setdata=(key,value)=>{
    console.log(key,value)
   return localStorage.setItem((key,JSON.stringify(value)))
}
export const getdata=(key)=>{
    const x=JSON.parse(localStorage.getItem(key))||""
    return x
}