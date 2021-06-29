// types
export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART";

// Creator

export const addCart = () => ({
  type: ADD_CART,
});
export const deleteCart = () => ({
  type: DELETE_CART,
});
