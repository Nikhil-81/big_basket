import axios from "axios";
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

export const LOGINUSER = (item) => (dispatch) => {
  let userData = [];
  console.log("userData: ", userData);

  dispatch({ type: AUTH_LOGIN_REQUEST });
  try {
    return axios
      .post(`http://localhost:3004/users`, item)
      .then(() => dispatch({ type: AUTH_LOGIN_SUCCESS }));
  } catch (error) {
    dispatch({ type: AUTH_LOGIN_FAILURE });
  }
};
