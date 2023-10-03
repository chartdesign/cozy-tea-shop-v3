import React from "react";
import "./styles/popular.css";
import PopItemCard from "./PopItemCard";
import { popItems } from "../popularItems.js";

const PopularItems = () => {
  return (
    <section className='popular'>
      <h1>Popular Teas</h1>
      <div className='popular-card-section'>
        {popItems.slice(0, 4).map((item) => (
          <PopItemCard
            key={item.id}
            image={item.img}
            title={item.title}
            price={item.price}
            description={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularItems;
