
import {GET_CART_REQUEST,GET_CART_SUCCESS,GET_CART_FAILURE,
    ADD_TO_CART_REQUEST,ADD_TO_CART_SUCCESS,ADD_TO_CART_FAILURE,
    REMOVE_FROM_CART_REQUEST,REMOVE_FROM_CART_SUCCESS,REMOVE_FROM_CART_FAILURE,
    UPDATE_CART_REQUEST,UPDATE_CART_SUCCESS,UPDATE_CART_FAILURE,
    CLEAR_CART_REQUEST,CLEAR_CART_SUCCESS,CLEAR_CART_FAILURE}from "./actionTypes"


   const initcartstate={
    cartLoding:false,cartSucess:false,casrError:false,cartData:[
        {
            "id": 19,
            "title": "Opna Women's Short Sleeve Moisture",
            "price": 7.95,
            "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
            "category": "women's clothing",
            "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
            "rating": {
              "rate": 4.5,
              "count": 146
            },
            "qty":1
          },
          {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            },
            "qty":1
          }
         
       
        
    ],cartId:[19,1],subTotal:Number(117.9)
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
       subTotal:(state.subTotal+=Number((payload.item.price)*(payload.val))),
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