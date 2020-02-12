import { cartActionTypes } from "./cartTypes";
import { addItemToCart } from "./cartUtils";
const INITIAL_STATE = {
  isCartDropdownHidden: true,
  cartItems: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_DROPDOWN:
      return { ...state, isCartDropdownHidden: !state.isCartDropdownHidden };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};
