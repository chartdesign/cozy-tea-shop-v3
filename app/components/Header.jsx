import React from "react";
import "./styles/header.css";

const Header = () => {
  return (
    <header>
      <nav className='nav-header container'>
        <div className='logo'>
          <img src='/logo.png' alt='tea shop' />
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
              <img src='/cart.svg' alt='cart' className='svg-img' /> Cart
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
