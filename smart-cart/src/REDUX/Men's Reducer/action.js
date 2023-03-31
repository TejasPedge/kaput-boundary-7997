import { MENS_PRODUCT_REQUEST_MADE, MENS_PRODUCT_REQUEST_SUCCESS, MENS_PRODUCT_REQUEST_FAILURE, TOTAL_MENS_DATA, } from "./actiontypes";

import axios from 'axios'


export const getAllData =  (obj) => async (dispatch) => {


    try {

        dispatch({type : MENS_PRODUCT_REQUEST_MADE})

        let data = await axios.get(`${process.env.REACT_APP_SMART_CART_BASE_URL}/MensProducts`,{params : obj});

        if(data.status === 200) {

            dispatch({type : MENS_PRODUCT_REQUEST_SUCCESS, payload : data.data});

            dispatch({type : TOTAL_MENS_DATA, payload : Number(data.headers['x-total-count'])});

        }

        console.log(data);

    } catch (error) {

        dispatch({type :MENS_PRODUCT_REQUEST_FAILURE});

    }

} 

