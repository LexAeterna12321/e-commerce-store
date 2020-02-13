import React from "react";
import { connect } from "react-redux";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartDropdown } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";

const CartIcon = ({ toggleCartDropdownVisibility, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartDropdownVisibility}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdownVisibility: isCartDropdownHidden =>
    dispatch(toggleCartDropdown(isCartDropdownHidden))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
