import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    recentItem: {},
    cart: {},
    subtotal: 0,
    quantity: 1,
  },
  reducers: {
    addToCart: (state, action) => {
      const { itemCode, qty,img, price, name, size } = action.payload;
      state.recentItem = action.payload

      let updatedCart = JSON.parse(localStorage.getItem('cart')) || {};
      if (itemCode in updatedCart && size === updatedCart[itemCode].size) {
        updatedCart[itemCode].qty += qty;
        updatedCart[itemCode].total = parseInt(updatedCart[itemCode].qty) * parseInt(price)
      }
      else if (itemCode + size in updatedCart && size === updatedCart[itemCode + size].size) {
        updatedCart[itemCode + size].qty += qty;
        updatedCart[itemCode + size].total = parseInt(updatedCart[itemCode].qty) * parseInt(price)
      }
      else if (itemCode in updatedCart && size !== updatedCart[itemCode].size) {
        let updatedItemCode = itemCode + size
        let total = parseInt(qty) * parseInt(price)
        updatedCart[updatedItemCode] = { itemCode: updatedItemCode, qty, price, name, size, total };
      }
      else {
        let total = parseInt(qty) * parseInt(price)
        updatedCart[itemCode] = { itemCode, qty,img, price, name, size, total };
      }
      const subtotal = Object.values(updatedCart).reduce((acc, item) => {
        return acc + item.total;
      }, 0);
      state.cart = updatedCart
      state.subtotal = subtotal
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      localStorage.setItem('subTotal', JSON.stringify(subtotal));

      return state
    },
    removeFromCart: (state, action) => {
      const itemCodeToRemove = action.payload.itemCode;
      let updatedCart = JSON.parse(localStorage.getItem('cart')) || {};
      if (itemCodeToRemove in updatedCart) {
        delete updatedCart[itemCodeToRemove];
      }
      const subtotal = Object.values(updatedCart).reduce((acc, item) => {
        console.log(acc + item.total)
        return acc + item.total;
      }, 0);

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      localStorage.setItem('subTotal', JSON.stringify(subtotal));

      return {
        ...state,
        cart: updatedCart,
        subtotal: subtotal,
      };
    },
    updateQuantity: (state, action) => {
      state.quantity += action.payload;
      return state;
    },
    updateQuantityInCart: (state, action) => {
      state.quantity =action.payload.qty
      console.log(state.quantity)
      console.log(action.payload)
      state.quantity += action.payload.i;
      return state;
    },
  }
});

export const { addToCart, removeFromCart, updateQuantity,updateQuantityInCart } = cartSlice.actions;
export default cartSlice.reducer;
