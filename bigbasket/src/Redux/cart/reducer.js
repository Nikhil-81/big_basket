
import {GET_CART_REQUEST,GET_CART_SUCCESS,GET_CART_FAILURE,
    ADD_TO_CART_REQUEST,ADD_TO_CART_SUCCESS,ADD_TO_CART_FAILURE,
    REMOVE_FROM_CART_REQUEST,REMOVE_FROM_CART_SUCCESS,REMOVE_FROM_CART_FAILURE,
    UPDATE_CART_REQUEST,UPDATE_CART_SUCCESS,UPDATE_CART_FAILURE,
    CLEAR_CART_REQUEST,CLEAR_CART_SUCCESS,CLEAR_CART_FAILURE}from "./actionTypes"


   const initcartstate={
    cartLoding:false,cartSucess:false,casrError:false,cartData:[],cartId:[19],subTotal:Number(7.95)
   } 
export const cartReducer=(state=initcartstate,{type,payload})=>{
switch(type){
    // case GET_CART_REQUEST:{

    // }
    // case GET_CART_SUCCESS:{
        
    // }
    // case GET_CART_FAILURE:{
        
    // }

    ////////////////////////////////


    case ADD_TO_CART_REQUEST:{
        return({...state,cartLoding:true,cartSucess:false,casrError:false})
        
    }
    case ADD_TO_CART_SUCCESS:{
        let item={...payload,qty:1}
        return ({...state,cartLoding:false,cartSucess:true,casrError:false,cartData:([...state.cartData,item]),cartId:([...state.cartId,payload.id]),subTotal:(state.subTotal+=Number(payload.price))})
        
    }
    case ADD_TO_CART_FAILURE:{
        return({...state,cartLoding:false,cartSucess:false,casrError:true})
        
    }

    //////////////////////////////


    case REMOVE_FROM_CART_REQUEST:{
        return({...state,cartLoding:true,cartSucess:false,casrError:false})
        
    }
    case REMOVE_FROM_CART_SUCCESS:{
        let newCart=state.cartData.filter(el=>el.id!=payload.id)
        let itemToRemove=state.cartData.filter(el=>el.id==payload.id)

        let newids=state.cartId.filter(el=>el!=payload.id)
    

        return ({...state,cartLoding:false,cartSucess:true,casrError:false,cartData:newCart,cartId:newids,subTotal:(state.subTotal-=Number(payload.price*itemToRemove[0].qty))})
        
    }
    case REMOVE_FROM_CART_FAILURE:{
        return({...state,cartLoding:false,cartSucess:false,casrError:true})
        
    }
    ///////////////////////////////



    case UPDATE_CART_REQUEST:{
        return({...state,cartLoding:true,cartSucess:false,casrError:false})
        
    }
    case UPDATE_CART_SUCCESS:{
        const itemToUpdate=state.cartData.filter(el=>el.id==payload.item.id)
        console.log("reducer",itemToUpdate,payload.val,payload.item.qty)

    return ({...state,cartLoding:false,cartSucess:true,casrError:false,
       subTotal:(state.subTotal+=Number(Number(payload.item.price)*Number(payload.val))),
       cartData:[...state.cartData.map(el=>el.id==payload.item.id?({...el,qty:el.qty+=Number(payload.val)}):el)]
        
    })


    }

    case UPDATE_CART_FAILURE:{
        return({...state,cartLoding:false,cartSucess:false,casrError:true})
        
    }
    //////////////////////////////////


    case CLEAR_CART_REQUEST:{
                return({...state,cartLoding:true,cartSucess:false,casrError:false})
    }
    case CLEAR_CART_SUCCESS:{
                return ({...state,cartLoding:false,cartSucess:true,casrError:false,cartData:[],cartId:[],subTotal:0})
    }
    case CLEAR_CART_FAILURE:{
                return({...state,cartLoding:false,cartSucess:false,casrError:true})
    }
    default: {
        return state
    }
}
}