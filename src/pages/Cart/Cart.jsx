import React, { useEffect, useState } from "react";
import "./Cart.css";
import Header from '../../components/common/Header';
import Navbar from '../../components/common/Navbar';
import {Link} from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const increaseQty = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQty = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  console.log("TOTAL PRICE:", totalPrice);

  if (cart.length === 0) {
    return <h2 style={{ padding: "40px" }}>Your cart is empty</h2>;
  }

  return (
    <>
    <Header/>
    <Navbar/>
    <div className="cart-page">
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
           {cart.map((item)=>(<Link to={`/product/${item.id}`}><img src={item.image}  alt={item.title} /></Link>))};

            <div className="cart-info">
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>

              <div className="qty">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Price Details</h3>
        <p>Total: ₹{totalPrice}</p>
        <button>Place Order</button>
      </div>
    </div>
    </>
  );
}
