import * as types from "./actionTypes"
import axios from "axios"

export const getaddressreq=()=>{
    return{type: types.ADD_ADDRESS_REQUEST}
}
export const getaddresssucc=(payload)=>{
    return{type: types.ADD_ADDRESS_SUCCESS,payload}
}
export const getaddressfail=()=>{
    return{type: types.ADD_ADDRESS_ERROR}
}

export const addaddressreq=()=>{
    return{type: types.ADD_ADDRESS_REQUEST}
}
export const addaddresssucc=(payload)=>{
    return{type: types.ADD_ADDRESS_SUCCESS,payload}
}
export const addaddressfail=()=>{
    return{type: types.ADD_ADDRESS_ERROR}
}

export const getAdd=(dispatch)=>{
    dispatch(getaddressreq())
    return axios.get(`https://bigbasket-server.onrender.com/AllAddress`)
    .then((r)=>{
        dispatch(getaddresssucc(r.data))
    })
    .catch((e)=>{
        dispatch(getaddressfail())
    })
}

export const AddingAdd=(data)=>(dispatch)=>{
    dispatch(addaddressreq())
    if(data){
        const payload={
            address:data.address,
            city:data.city,
            phone:data.phone,
            fname:data.fname,
            lname:data.lname,
            pin:data.pin,
            house:data.house
        }
    return axios.post(`https://bigbasket-server.onrender.com/AllAddress`,payload)
    .then((r)=>{
        console.log(r.data)
        dispatch(addaddresssucc(r.data))
    })
    .catch((e)=>{
        dispatch(addaddressfail())
    })
}
}