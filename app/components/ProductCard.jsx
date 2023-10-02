import React from "react";

const ProductCard = (props) => {
  return (
    <div className='product-card'>
      <div className='product-img'>
        <img src={props.image} alt={props.name} />
      </div>
      <p>{props.name}</p>
    </div>
  );
};

export default ProductCard;
