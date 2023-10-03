import React from "react";
import "./styles/header.css";
import Link from "next/link";
const NavLinks = () => {
  return (
    <nav className='nav-links'>
      <ul className='flex'>
        <li>
          <Link href='/shop'>SHOP</Link>{" "}
        </li>
        <li>SUBSCRIBE</li>
        <li>LEARN</li>
        <li>OUR STORY</li>
        <li>FAQ</li>
      </ul>
    </nav>
  );
};

export default NavLinks;
