import React from "react";
import "../components/styles/popular.css";
import { popItems } from "./../popularItems.js";
import PopItemCard from "../components/PopItemCard.jsx";
import Header from "../components/Header";
import NavLinks from "../components/NavLinks";

const page = () => {
  return (
    <>
      <Header />
      <NavLinks />
      <div className='popular-card-section'>
        {popItems.map((item) => (
          <PopItemCard
            key={item.id}
            itemNum={item.id}
            image={item.img}
            title={item.title}
            price={item.price}
            description={item.desc}
          />
        ))}
      </div>
    </>
  );
};

export default page;
