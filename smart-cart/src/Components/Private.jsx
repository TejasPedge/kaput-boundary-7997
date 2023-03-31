
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({children}){
    const location=useLocation()
    const auth=useSelector((data)=>{return data.login.isAuth})
    console.log(auth)
    const localauth=localStorage.getItem("auth")||false
    console.log(localauth)
    if(localauth==false){
        return <Navigate to="/login" state={location.pathname} replace/>
    }
    return children
}