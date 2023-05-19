import React from 'react'
import {WOMENS_PRODUCT_REQUEST,WOMENS_PRODUCT_SUCCESS,WOMENS_PRODUCT_FAILURE, TOTAL_WOMENS_DATA} from "./actionTypes"
import axios from 'axios'


export const getAllData =  (obj) => async (dispatch) => {


    try {

        dispatch({type : WOMENS_PRODUCT_REQUEST})

        let data = await axios.get(`${process.env.REACT_APP_SMART_CART_BASE_URL}/women`,{params : obj});

        if(data.status === 200) {

            dispatch({type : WOMENS_PRODUCT_SUCCESS, payload : data.data});
            console.log(data.data)

            dispatch({type : TOTAL_WOMENS_DATA, payload : Number(data.headers['x-total-count'])});

        }

        console.log(data);

    } catch (error) {

        dispatch({type :WOMENS_PRODUCT_FAILURE});

    }

} 

