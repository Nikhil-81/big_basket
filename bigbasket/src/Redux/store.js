/*
Dont make any changes to this file
*/

import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import cartReducer from './cart/reducer';
import productsReducer from './products/reducer';
import checkoutReducer from './Checkout/reducer';

const rootReducer = combineReducers({
    auth : authReducer,
    products : productsReducer,
    carts: cartReducer,
    checkout: checkoutReducer
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  (applyMiddleware(thunk))
);
