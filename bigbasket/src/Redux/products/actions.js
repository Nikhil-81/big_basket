import * as types from "./actionTypes";
import axios from "axios";

export const getProductRequest = () => {
    return {
        type: types.GET_PRODUCT_REQUEST
    }
}
export const getProductSuccess = (payload) => {
    return {
        type: types.GET_PRODUCT_SUCCESS,
        payload
    }
}
export const getProductError = () => {
    return {
        type: types.GET_PRODUCT_FAILURE
    }
}

export const getProducts = () => (dispatch) => {
        dispatch(getProductRequest());
        return axios.get(`https://bigbasket-server.onrender.com/products`).then(r => { dispatch(getProductSuccess(r.data));console.log(r.data)})
        .catch(err => dispatch(getProductError()) )
    
}