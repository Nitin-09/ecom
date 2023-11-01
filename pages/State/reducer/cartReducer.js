const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case 'add_to_cart':
      {
        const { itemCode, qty, price, name, size } = action.payload;

        let updatedCart = JSON.parse(localStorage.getItem('cart')) || {};

        if (itemCode in updatedCart) {
          // Item already exists, increment the quantity
          updatedCart[itemCode].qty += qty;
          updatedCart[itemCode].total = parseInt(updatedCart[itemCode].qty) * parseInt(price)

        } else {
          // Item doesn't exist, add it to the cart
          let total = parseInt(qty) * parseInt(price)
          updatedCart[itemCode] = { itemCode, qty, price, name, size, total };
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
      }
    case 'remove_from_cart':
      {
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
      }
    default:
      return state;
  }
};
export default cartReducer
