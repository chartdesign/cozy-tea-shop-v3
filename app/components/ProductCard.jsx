import Link from "next/link";
import React from "react";

const ProductCard = (props) => {
  return (
    <div className='product-card'>
      <Link href='/shop'>
        <div className='product-img'>
          <img src={props.image} alt={props.name} />
        </div>
      </Link>

      <p>{props.name}</p>
    </div>
  );
};

export default ProductCard;
