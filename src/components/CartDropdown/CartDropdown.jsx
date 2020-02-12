import React from "react";

import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.scss";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHEKCOUT</CustomButton>
  </div>
);

export default CartDropdown;
