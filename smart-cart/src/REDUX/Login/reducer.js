import { loginreq, loginsucc ,loginfail} from "./actionTypes"
import { setdata,getdata } from "./action"
let initialdata={
    isLoading:false,
    isError:false,
    isAuth:getdata("auth")||false,

}

export const reducer=(state=initialdata,action)=>{
    const{type,payload}=action
    switch(type){
        case loginreq:{
            return {...state,isLoading:true,isError:false,isAuth:false}
        }
        case loginsucc:{
           const{isAuth}=state
           localStorage.setItem("auth", "true");
            return {...state,isLoading:false,isError:false,isAuth:true}
        }
        case loginfail:{
            return {...state,isLoading:false,isError:true,isAuth:false}
        }
        default:{
            return state
        }
    }
}