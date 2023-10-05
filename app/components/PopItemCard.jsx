"use client";
import React, { useContext } from "react";
import { ShopContext } from "../components/shop-context";

const PopItemCard = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[props.itemNum];
  return (
    <div className='popular-card'>
      <div className='popular-card-img'>
        <img src={props.image} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
      <p>
        <span>****</span> (110 Reviews)
      </p>
      <p>{props.description}</p>
      <p>{props.price}/Oz</p>
      <button className='all-tea' onClick={() => addToCart(props.itemNum)}>
        ADD TO CART {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

export default PopItemCard;
