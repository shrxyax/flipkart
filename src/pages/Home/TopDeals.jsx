import React from "react";
import { Link } from "react-router-dom";
import "./TopDeals.css";
import { useEffect } from "react";

export default function TopDeals() {
  const deals = [
    {
      id: 1,
      title: "Projector",
      price: 6990,
      image: "https://picsum.photos/id/1060/300/300"
    },
    {
      id: 2,
      title: "Best Selling Mobile Speaker",
      price: 499,
      image: "https://picsum.photos/id/1080/300/300"
    },
    {
      id: 3,
      title: "Monitors",
      price: 6599,
      image: "https://picsum.photos/id/1044/300/300"
    },
    {
      id: 4,
      title: "Monitor",
      price: 8279,
      image: "https://picsum.photos/id/1011/300/300"
    },
    {
      id: 5,
      title: "Top Mirrorless Camera",
      price: 2000,
      image: "https://picsum.photos/id/1005/300/300"
    },
    {
      id: 6,
      title: "Monitor",
      price: 4567,
      image: "https://picsum.photos/id/1011/300/300"
    },
    {
      id: 7,
      title: "Top Mirrorless Camera",
      price: 5000,
      image: "https://picsum.photos/id/1005/300/300"
    },
    {
      id: 8,
      title: "Fastrack Smartwatch",
      price: 1399,
      image: "https://picsum.photos/id/1059/300/300"
    }
  ];
useEffect(() => {
  console.log("DEALS:", deals);
}, []);

  return (
    <div className="top-deals-container">
      <h2 className="topdeals-title">Top Deals</h2>

      <div className="top-deals-row">
        {deals.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className="deal-link"
          >
            <div className="deal-card">
              <img src={item.image} alt={item.title} />
              <p className="deal-title">{item.title}</p>
              <p className="deal-price">{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
