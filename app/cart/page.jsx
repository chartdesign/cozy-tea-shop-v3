"use client";
import React, { useContext } from "react";
import { ShopContext } from "../components/shop-context";
import Header from "../components/Header";
import { popItems } from "../popularItems";
import CartItems from "./cartItems";
import PopItemCard from "../components/PopItemCard";
import NavLinks from "../components/NavLinks";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <>
      <Header />
      <NavLinks />

      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cart'>
        {popItems.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <CartItems
                key={product.id}
                itemNum={product.id}
                image={product.img}
                title={product.title}
                price={product.price}
                description={product.desc}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default Cart;
