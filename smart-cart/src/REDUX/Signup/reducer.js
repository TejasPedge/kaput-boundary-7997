import { getdata, setdata } from "./action"
import { signupsuccess,signupreq, signupfail } from "./actionType"

const initialdata={
    isLoading:false,
    isError:false,
    isAuth:false
}
export const reducer=(state=initialdata,action)=>{
    const{type,paylaod}=action
    switch(type){
        case signupreq:{
           

            return {...state,isLoading:true,isError:false,isAuth:false}
        }
        case signupsuccess:{
            return {...state,isLoading:false,isError:false,isAuth:true}
        }
        case signupfail:{
            return {...state,isLoading:false,isError:true,isAuth:false}
        }
        default :{
            return state
        }
    }
}