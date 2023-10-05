import React, { useContext } from "react";
import { ShopContext } from "../components/shop-context";
import "./cart.css";

const CartItems = (props) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className='cartItem'>
      <img src={props.image} />
      <div className='description'>
        <p>
          <b>{props.title}</b>
        </p>
        <p> Price: ${props.price}</p>
        <div className='countHandler'>
          <button onClick={() => removeFromCart(props.itemNum)}> - </button>
          <input
            value={cartItems[props.itemNum]}
            onChange={(e) =>
              updateCartItemCount(Number(e.target.value), props.itemNum)
            }
          />
          <button onClick={() => addToCart(props.itemNum)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
