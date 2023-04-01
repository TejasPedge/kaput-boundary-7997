import {WOMENS_PRODUCT_REQUEST,WOMENS_PRODUCT_SUCCESS,WOMENS_PRODUCT_FAILURE} from "./actionTypes"

const initialState={
isLoading:false,
isError:false,
products:[]
}
export const reducer=(state=initialState,{type,payload})=>{
switch(type){
case WOMENS_PRODUCT_REQUEST:return {isLoading:true,isError:false,...state}
case WOMENS_PRODUCT_SUCCESS:return {isLoading:false,isError:false,...state, products:payload}
case WOMENS_PRODUCT_FAILURE: return {isLoading:false,isError:true,...state}
    default:return state
}
}