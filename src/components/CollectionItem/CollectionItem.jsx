import React from "react";
import "./CollectionItem.scss";
import CustomButton from "../CustomButton/CustomButton";
const CollectionItem = ({ id, name, price, imageUrl }) => {
  const image = `url(${imageUrl})`;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: image }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted>ADD TO CART</CustomButton>
    </div>
  );
};

export default CollectionItem;
