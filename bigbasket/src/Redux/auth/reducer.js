import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_RESET,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_REGISTER_FAILURE,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_RESET,
  AUTH_REGISTER_SUCCESS,
} from "./actionTypes";

const initState={
  isLoading: false,
  isAuth: false,
  isError: false,
  user:''
}

export default function authReducer(state=initState, { type, payload }) {
  switch (type) {
      case AUTH_LOGIN_REQUEST:{
        return{
          ...state,
          isLoading:true
        }
      }
      case AUTH_LOGIN_SUCCESS:{
        return{
          ...state,
          isAuth: true,
          user: payload.email,
        }
      }
      case AUTH_LOGIN_FAILURE:{
        return {
          ...state,
          isError: true
        }
      }
      default:{
        return state
      }
  }
 
}
