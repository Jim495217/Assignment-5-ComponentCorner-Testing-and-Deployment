import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import Footer from "./components/Footer";

function App() {
  // ✅ Product data array
  const products = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: 99.99,
      image: "https://placehold.co/600x400",
      description: "Comes with noise cancellation and high sound quality.",
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      price: 59.99,
      image: "https://placehold.co/600x400",
      description: "A small, portable speaker that can satisfy your music needs.",
    },
    {
      id: 3,
      name: "Laptop",
      price: 599.99,
      image: "https://placehold.co/600x400",
      description: "A portable, sleek device ready for work and play.",
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 20.99,
      image: "https://placehold.co/600x400",
      description: "Hard-plastic adjustable laptop stand.",
    },
    {
      id: 5,
      name: "Mechanical keyboard",
      price: 50.99,
      image: "https://placehold.co/600x400",
      description: "A mechanical keyboard that has hotswappable switches!",
    },
    {
      id: 6,
      name: "Mouse",
      price: 49.99,
      image: "https://placehold.co/600x400",
      description: "A quick, plug-in-play wireless mouse.",
    },
  ];

  // ✅ Cart state
  const [cart, setCart] = useState([]);

  // ✅ Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log("Added to cart:", product);
  };

  // ✅ Remove from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // ✅ Cart total using reduce
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <Header storeName="ComponentCorner" cartCount={cart.length} />

      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Your Corner for your daily electronic needs."
        cta="Shop Now!"
      />

      <main className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </main>

      {/* 🛒 Cart Section */}
      <section className="cart">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
              />
            ))}

            <h3>Total: ${cartTotal.toFixed(2)}</h3>
          </>
        )}
      </section>

      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.com"
        phone="(999) 432-5927"
      />
    </>
  );
}

export default App;
