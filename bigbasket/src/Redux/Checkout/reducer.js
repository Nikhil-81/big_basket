
import * as types from "./actionTypes"

const initialState={
    AllAddress:[],
    isLoading:false,
    isError:false
}

const reducer = (state=initialState,action) => {
    const {type,payload}=action
    switch(type){
        case types.GET_ADDRESS_REQUEST:{
            return {...state,isLoading:true}
        }
        case types.GET_ADDRESS_SUCCESS:{
            return {...state,isLoading:false,AllAddress:payload}
        }
        case types.GET_ADDRESS_ERROR:{
            return {...state,isLoading:false,isError:true}
        }
        case types.ADD_ADDRESS_REQUEST:{
            return {...state,isLoading:true}
        }
        case types.ADD_ADDRESS_SUCCESS:{
            return {...state,isLoading:false,AllAddress:payload}
        }
        case types.ADD_ADDRESS_ERROR:{
            return {...state,isLoading:false,isError:true}
        }
        default:return state
    }
  
}

export default reducer