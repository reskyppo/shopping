import { ADD_CART, DELETE_CART } from "../actions/cartActions";

const cartReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case ADD_CART:
      return { ...state, value: state.value + 1 };
    case DELETE_CART:
      return { ...state, value: state.value - 1 };

    default:
      return { ...state };
  }
};

export default cartReducer;
