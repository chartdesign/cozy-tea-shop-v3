import React from "react";
import "./styles/hero.css";
import "./styles/bundles.css";

const Bundles = () => {
  return (
    <section className='hero'>
      <div className='bundle-text hero-text'>
        <div className='col'>
          <p>Everything You Need</p>
          <h1>Ultimate Iced Tea Bundle</h1>
          <p>
            We like to call our ultimate iced tea bundle the last iced tea
            bundle you’ll ever need because honestly, the only thing you will
            need is more tea.
          </p>
          <div className='hero-buttons'>
            <button className='all-tea'>BUY THE BUNDLE</button>
          </div>
        </div>
      </div>

      <img
        src='https://images.pexels.com/photos/1759013/pexels-photo-1759013.jpeg?auto=compress&cs=tinysrgb&w=800'
        alt='iced tea'
      />
    </section>
  );
};

export default Bundles;
