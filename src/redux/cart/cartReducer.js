import { cartActionTypes } from "./cartTypes";

const INITIAL_STATE = {
  isCartDropdownHidden: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_DROPDOWN:
      return { ...state, isCartDropdownHidden: !state.isCartDropdownHidden };
    default:
      return state;
  }
};
