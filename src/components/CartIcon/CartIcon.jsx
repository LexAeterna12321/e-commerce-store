import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartDropdown } from "../../redux/cart/cartActions";
import { connect } from "react-redux";
const CartIcon = ({ toggleCartDropdownVisibility }) => (
  <div className="cart-icon" onClick={toggleCartDropdownVisibility}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartDropdownVisibility: isCartDropdownHidden =>
    dispatch(toggleCartDropdown(isCartDropdownHidden))
});

export default connect(null, mapDispatchToProps)(CartIcon);
