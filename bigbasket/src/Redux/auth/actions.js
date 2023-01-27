import {Login_request,Login_error,Login_sucess,Logout_request,Singin_request,Singin_error,Singin_sucess,Logout_error,Logout_sucess} from "./actionTypes"
import axios from "axios"
export  const UserLogin_request=(data)=>(dispatch)=>{
    dispatch({type:Login_request})
    try{
        return axios.post("http://localhost:4002/user/login",data)
        .then(res=>(dispatch({type:Login_sucess,payload:res.data.user})))
        .catch(err=>dispatch({type:Login_error}))
    }
    catch(err){
        console.log(err)
        dispatch({type:Login_error})
    }
}


export  const UserSingin_request=(data)=>(dispatch)=>{
    console.log("userSingin_r_1")
    dispatch({type:Singin_request})
    try{
        console.log("userSingin_r_2")

       return  axios.post("http://localhost:4002/user/ragister",data).then(res=>dispatch({type:Singin_sucess})).catch(err=>dispatch({type:Singin_error}))
    }
    catch(err){
        dispatch({type:Singin_error})
    }
}


export const Usert_logout_request=()=>(dispatch)=>{
    dispatch({type:Logout_request})
    try{
        dispatch({type:Logout_sucess})
    }
    catch(err){
        dispatch({type:Logout_error})
    }
}