// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducer/cartReducer';
import productReducer from './reducer/productReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products:productReducer
  },
});

export default store;
