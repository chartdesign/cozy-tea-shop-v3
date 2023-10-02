import React from "react";
import "./styles/benefits.css";

const Benefits = () => {
  return (
    <section className='benefits'>
      <div className='benefit-card'>
        <div className='benefit-card-img'>
          <img src='/thumb.svg' alt='user' className='svg-img' />
        </div>
        <p>Always Hand Blended Fresh</p>
      </div>
      <div className='benefit-card'>
        <div className='benefit-card-img'>
          <img src='/thumb.svg' alt='user' className='svg-img' />
        </div>
        <p>Free Sample With Every Order</p>
      </div>
      <div className='benefit-card'>
        <div className='benefit-card-img'>
          <img src='/thumb.svg' alt='user' className='svg-img' />
        </div>
        <p>100% Secure Checkout</p>
      </div>
      <div className='benefit-card'>
        <div className='benefit-card-img'>
          <img src='/thumb.svg' alt='user' className='svg-img' />
        </div>
        <p>Fast Shipping</p>
      </div>
    </section>
  );
};

export default Benefits;
