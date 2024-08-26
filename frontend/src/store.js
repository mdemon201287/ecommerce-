import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';  // Import `thunk` directly from `redux-thunk`
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import cartReducer from './reducers/cartReducers';
import { userLoginReducer } from './reducers/userReducers';

// Combine all the reducers
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
});

// Retrieve user info from local storage
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

// Retrieve cart items from local storage (assuming cartItemsFromStorage is defined somewhere)
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

// Initial state of the application
const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
};

// Middleware
const middleware = [thunk];

// Create the Redux store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
