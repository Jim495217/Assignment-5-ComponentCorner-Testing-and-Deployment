// ProductCard.jsx
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ name, price, image, description }) => {
  return (
    <div className="product-card">
      <img 
        src={image} 
        alt={name} 
        className="product-image"
      />

      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
