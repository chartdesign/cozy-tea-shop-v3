"use client";
import React, { useContext, useState } from "react";
import { ShopContext } from "../components/shop-context";
import "./styles/header.css";
import Link from "next/link";
import Modal from "./Modal";

const Header = (props) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[props.itemNum];
  const [openModal, setOpenModal] = useState(false);
  return (
    <header>
      <nav className='nav-header container'>
        <div className='logo'>
          <Link href='/'>
            <img src='/logo.png' alt='tea shop' />
          </Link>
        </div>
        <div className='user-info'>
          <div id='input-container' className='searchBox'>
            <img src='/search.svg' alt='user' className='svg-img' />
            <input type='text' placeholder='Search' />
          </div>

          <ul className='nav-header-user'>
            <li>
              <img src='/wishlist.svg' alt='heart' className='svg-img' />
              Wishlist
            </li>
            <li>
              <img src='/user.svg' alt='user' className='svg-img' /> Account
            </li>
            <li>
              <img src='/cart.svg' alt='cart' className='svg-img' />
              <Link href='/cart'>Cart</Link>
            </li>
            {cartItemCount}
          </ul>
          {/* <div>
            <button onClick={() => setOpenModal(true)} className='modalButton'>
              Modal
            </button>
            <Modal open={openModal} onClose={() => setOpenModal(false)} />
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
