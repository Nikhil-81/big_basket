
import {GET_CART_REQUEST,GET_CART_SUCCESS,GET_CART_FAILURE,
    ADD_TO_CART_REQUEST,ADD_TO_CART_SUCCESS,ADD_TO_CART_FAILURE,
    REMOVE_FROM_CART_REQUEST,REMOVE_FROM_CART_SUCCESS,REMOVE_FROM_CART_FAILURE,
    UPDATE_CART_REQUEST,UPDATE_CART_SUCCESS,UPDATE_CART_FAILURE,
    CLEAR_CART_REQUEST,CLEAR_CART_SUCCESS,CLEAR_CART_FAILURE}from "./actionTypes"


export const addToCart=(item)=>(dispatch)=>{
dispatch({type:ADD_TO_CART_REQUEST})
try{
    dispatch({type:ADD_TO_CART_SUCCESS,payload:item})
}
catch(err){
    dispatch({type:ADD_TO_CART_FAILURE})
}

}

export const getCart=()=>(dispatch)=>{
  
}

export const removeCart=(item)=>(dispatch)=>{
    dispatch({type:REMOVE_FROM_CART_REQUEST})
    try{
        dispatch({type:REMOVE_FROM_CART_SUCCESS,payload:item})
    }
    catch(err){
        dispatch({type:REMOVE_FROM_CART_FAILURE})
    }
}

export const updateCart=(val,item)=>(dispatch)=>{
    dispatch({type:UPDATE_CART_REQUEST})
    try{
        dispatch({type:UPDATE_CART_SUCCESS,payload:{val,item}})
    }
    catch(err){
        dispatch({type:UPDATE_CART_FAILURE})
    }
}