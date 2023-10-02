import React from "react";
import "./styles/hero.css";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='img-text hero-text'>
        <div className='col'>
          <p>Sip A World Of Tranquility</p>
          <h1>Tea For Every Moment</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum in
            iusto animi nostrum beatae enim delectus eligendi temporibus quos
            quibusdam.
          </p>
          <div className='hero-buttons'>
            <button className='all-tea'>SHOP ALL TEA</button>
            <button className='season-tea'>SHOP AUTUMN TEAS</button>
          </div>
        </div>
      </div>

      <img
        src='https://images.pexels.com/photos/1251083/pexels-photo-1251083.jpeg?auto=compress&cs=tinysrgb&w=800'
        alt=''
      />
    </section>
  );
};

export default Hero;
