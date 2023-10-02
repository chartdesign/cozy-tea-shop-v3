import React from "react";
import "./styles/categories.css";
import ProductCard from "./ProductCard";
import { categories } from "../categories";

const Categories = () => {
  return (
    <section className='categories'>
      <div className='product-container'>
        <h1>Shop Our Teas</h1>
        <div className='products'>
          {categories.map((category) => (
            <ProductCard
              key={category.id}
              name={category.name}
              image={category.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
