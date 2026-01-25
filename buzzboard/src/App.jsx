import React from "react";
import ProductCard from "components/ProductCard";

function App() {
  return (
    <div className="app">
      <h1>Product List</h1>

      <ProductCard
        name="Earbuds"
        price={59.99}
        image="https://placehold.co/600x400"
        description="Wireless earbuds with noise cancellation and high sound quality."
      />

      <ProductCard
        name="Tablet"
        price={149.99}
        image="https://placehold.co/600x400"
        description="A small portable device that can be used for anything on the go!"
      />

      <ProductCard
        name="Laptop"
        price={599.99}
        image="https://placehold.co/600x400"
        description="A laptop used for gaming and other necessities like work."
      />
    </div>
  );
}

export default App;
