import * as types from "./actionTypes"

const initState = {
    products: [],
    isLoading: false,
    isError: false
};

export const productsReducer = (oldState = initState, action) => {

    const { type, payload } = action;

    switch(type){

        case types.GET_PRODUCT_REQUEST: return {...oldState, isLoading: true};
        case types.GET_PRODUCT_SUCCESS: return {...oldState, isLoading: false, products: payload};
        case types.GET_PRODUCT_FAILURE: return {...oldState, isLoading: false, isError: true};

        default: return oldState;
    }

}