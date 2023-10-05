"use client";
import React, { useContext } from "react";
import { ShopContext } from "../components/shop-context";
import Header from "../components/Header";
import { popItems } from "../popularItems";
import CartItems from "./cartItems";
import PopItemCard from "../components/PopItemCard";

const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <>
      <Header />

      <div>
        <h1>Your Cart Items</h1>
      </div>

      <PopItemCard />
    </>
  );
};

export default Cart;
