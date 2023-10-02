import React from "react";
import "./styles/benefits.css";

const WhyUs = () => {
  return (
    <section className='why-us'>
      <h3>Why Choose Us</h3>
      <h1>What Makes Us Different</h1>
      <div className='differences'>
        <div className='benefit-card'>
          <div className='benefit-card-img'>
            <img src='/thumb.svg' alt='user' className='svg-img' />
          </div>
          <p>
            Hand-blended in small batches to ensure fresh flavor & dazzling
            aroma.
          </p>
        </div>
        <div className='benefit-card'>
          <div className='benefit-card-img'>
            <img src='/thumb.svg' alt='user' className='svg-img' />
          </div>
          <p>No sugar, nothing artificial, no gluten, no dairy</p>
        </div>
        <div className='benefit-card'>
          <div className='benefit-card-img'>
            <img src='/thumb.svg' alt='user' className='svg-img' />
          </div>
          <p>
            Natural, organic, & wildcrafted ingredients from family farms we
            know and trust
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
