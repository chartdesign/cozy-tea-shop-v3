import React from "react";

const PopItemCard = (props) => {
  return (
    <div className='popular-card'>
      <div className='popular-card-img'>
        <img src={props.image} alt={props.title} />
      </div>
      <h3>{props.title}</h3>
      <p>
        <span>****</span> (110 Reviews)
      </p>
      <p>{props.description}</p>
      <p>{props.price}/Oz</p>
      <button className='all-tea'>ADD TO CART</button>
    </div>
  );
};

export default PopItemCard;
