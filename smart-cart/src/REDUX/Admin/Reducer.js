import { deletefail, deletereq, deletesucc, postfail, postreq, postsucc, updatefail, updatereq, updatesucc } from "./ActionTypes"

const initialdata={
    isLoading:false,
    isError:false,
    isPost:false
}
export const reducer=(state=initialdata,action)=>{
    const{type,payload}=action
    switch(type){
        case postreq:{
return {...state,isLoading:true,isError:false,isPost:false}
        }
        case postsucc :{
            return {
                ...state,isLoading:false,isError:false,isPost:true
            }
        }
        case postfail:{
            return {...state,isLoading:false,isError:true,isPost:false}
        }
        default:{
            return state
        }
    }
}


// deletepart
const initialdata1={
    isLoading:false,
    isError:false,
    isDelete:false
}
export const deletereducer=(state=initialdata1,action)=>{
    const {type,payload}=action
    switch(type){
        case deletereq:{
            return {...state,isLoading:true,isError:false,isDelete:false}
        }
        case deletesucc:{
            return {...state,isLoading:false,isError:false,isDelete:true}
        }
        case deletefail:{
            return {...state,isLoading:false,isError:true,isDelete:false}
        }
        default:{
            return state
        }
    }

}
 

// update
const initialdata3={
    isLoading:false,
    isError:false,
    isupdate:false
}
export const update=(state=initialdata3,action)=>{
    const{type,payload}=action
    switch(type){
        case updatereq:{
return {...state,isLoading:true,isError:false,isupdate:false}
        }
        case updatesucc :{
            return {
                ...state,isLoading:false,isError:false,isupdate:true
            }
        }
        case updatefail:{
            return {...state,isLoading:false,isError:true,isupdate:false}
        }
        default:{
            return state
        }
    }
}
