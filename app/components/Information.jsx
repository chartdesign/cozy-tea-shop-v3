import React from "react";
import "./styles/info.css";

const Information = () => {
  return (
    <section className='container'>
      <div className='info-card-container'>
        <div className='info-card'>
          <h3>About Us</h3>
          <ul>
            <li>Our Story</li>
            <li>Our Community</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='info-card'>
          <h3>Customer Support</h3>
          <ul>
            <li>FAQ</li>
            <li>Wholesale</li>
            <li>Terms And Conditions</li>
            <li>My Account</li>
          </ul>
        </div>
        <div className='info-card'>
          <h3>Learn About Tea</h3>
          <ul>
            <li>How To Brew Tea</li>
            <li>How To Make Iced Tea</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Information;
