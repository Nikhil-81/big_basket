// import {
//   AUTH_LOGIN_FAILURE,
//   AUTH_LOGIN_REQUEST,
//   AUTH_LOGIN_RESET,
//   AUTH_LOGIN_SUCCESS,
//   AUTH_LOGOUT
// } from "./actionTypes";
// import * as types from './actionTypes'

// const initState={
//   isLoading: false,
//   isAuth: false,
//   isError: false,
//   user:'',
//   userdata:[]
// }

// export default function authReducer(state=initState, { type, payload }) {
//   switch (type) {
//       case AUTH_LOGIN_REQUEST:{
//         return{
//           ...state,
//           isLoading:true
//         }
//       }
//       case AUTH_LOGIN_SUCCESS:{
//         return{
//           ...state,
//           isAuth: true,
//           isLoading:false,
//           user: payload.email,
//         }
//       }
//       case AUTH_LOGIN_FAILURE:{
//         return {
//           ...state,
//           isError: true
//         }
//       }
//       case types.AUTH_REGISTER_REQUEST:{
//         return{...state, isLoading:true}
//       }
//       case types.AUTH_REGISTER_SUCCESS:{
//         return {...state, isLoading:false,userdata:payload}
//       }
//       case types.AUTH_REGISTER_FAILURE:{
//         return{...state, isLoading:false,isError:true}
//       }

//       default:{
//         return state
//       }
//   }
 
// }
