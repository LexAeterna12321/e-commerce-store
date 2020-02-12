import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
import "./CollectionItem.scss";
import CustomButton from "../CustomButton/CustomButton";
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const image = `url(${imageUrl})`;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: image }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
