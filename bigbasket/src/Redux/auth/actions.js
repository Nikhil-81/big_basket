// import axios from "axios";
// import {
//   AUTH_LOGIN_FAILURE,
//   AUTH_LOGIN_REQUEST,
//   AUTH_LOGIN_RESET,
//   AUTH_LOGIN_SUCCESS,
//   AUTH_LOGOUT
// } from "./actionTypes";
// import * as types from "./actionTypes";

// const authregreq=()=>{
//   return{type:types.AUTH_REGISTER_REQUEST}
// }
// const authregsucc=(payload)=>{
//   return{ type:types.AUTH_REGISTER_SUCCESS,payload}
// }
// const authregfail=()=>{
//   return {type:types.AUTH_REGISTER_FAILURE}
// }

// export const LOGINUSER = (item) => (dispatch) => {
//   console.log(item)
//   dispatch(authregreq());
//   // try {
//   //   return axios
//   //     .post(`http://localhost:3004/users`, item)
//   //     .then(() => dispatch({ type: AUTH_LOGIN_SUCCESS }));
//   // } catch (error) {
//   //   dispatch({ type: AUTH_LOGIN_FAILURE });
//   // }
// };
