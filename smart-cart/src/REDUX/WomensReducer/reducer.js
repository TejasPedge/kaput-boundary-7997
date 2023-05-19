import {WOMENS_PRODUCT_REQUEST,WOMENS_PRODUCT_SUCCESS,WOMENS_PRODUCT_FAILURE, TOTAL_WOMENS_DATA} from "./actionTypes"
const Initial_State = {

    isLoading : false,

    Womens_Product : [],

    total : null,

    isError : false,

}

export const reducer = (state = Initial_State, {type, payload}) => {

    switch (type) {

        case WOMENS_PRODUCT_REQUEST : return {...state, isLoading : true};

        case WOMENS_PRODUCT_SUCCESS : return {...state, isLoading : false, Womens_Product : payload };

        case TOTAL_WOMENS_DATA : return {...state, total : payload}

        case WOMENS_PRODUCT_FAILURE: return {...state, isLoading : false, isError : true};

        default : return state;

    }


}

