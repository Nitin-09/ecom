export const addToCart = (itemCode, qty, price, name, size) => {
    return (dispatch) => {
      dispatch({
        type: 'add_to_cart',
        payload: {itemCode,qty,price,name,size},
      });
    };
  };
  export const removeFromCart = (itemCode) => {
    return {
      type: 'remove_from_cart',
      payload: { itemCode },
    };
  };