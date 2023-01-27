/*
Dont make any changes to this file
*/

import {
  legacy_createStore as createStore,
  applyMiddleware,
  // compose,
  combineReducers,
} from "redux";

import thunk from 'redux-thunk';
import {cartReducer} from "../Redux/cart/reducer"
import {productsReducer} from './products/reducer';
import checkoutReducer from './Checkout/reducer';
import { Auth_reducer } from "./auth/reducer";


const rootReducer = combineReducers({
    products : productsReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    auth:Auth_reducer
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  (applyMiddleware(thunk))
);


