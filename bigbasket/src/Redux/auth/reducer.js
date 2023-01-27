import {Login_request,Login_error,Login_sucess,Logout_request,Singin_request,Singin_error,Singin_sucess,Logout_error,Logout_sucess} from "./actionTypes"

const initstate={
    auth_sucess:false,
    auth_load:false,
    auth_error:false,
    user:""

}

export const Auth_reducer=(state=initstate,{type,payload})=>{
switch (type){
    case Login_request:{
        return({...state,auth_load:true,auth_error:false,auth_sucess:false})
    }
    case Logout_request:{
        return({...state,auth_load:true,auth_error:false,auth_sucess:false})
    }
    case Singin_request:{
        return({...state,auth_load:true,auth_error:false,auth_sucess:false})
    }


    case Login_sucess:{
        console.log("reducer,login_sucess")
        return({...state,auth_load:false,auth_error:false,auth_sucess:true,user:payload})
    }
    case Singin_sucess:{
        console.log("reducer,singin_sucess")
        return({...state,auth_load:false,auth_error:false,auth_sucess:false})
    }
    case Logout_sucess:{
        return({...state,auth_load:false,auth_error:false,auth_sucess:false,user:""})
    }

    case Login_error:{
        return({...state,auth_load:false,auth_error:true,auth_sucess:false})
    }
    case Singin_error:{
        console.log("reducer,singin_error")

        return({...state,auth_load:false,auth_error:true,auth_sucess:false})
    }
    case Logout_error:{
        return({...state,auth_load:false,auth_error:true,auth_sucess:false})
    }

    default: {
        return state
    }
}
}