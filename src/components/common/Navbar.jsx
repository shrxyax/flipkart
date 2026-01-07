import React from "react";
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="nav-wrapper">
      <nav className="navbar">
        <div className="nav-body">
          <div className="nav-item">
             <div className="img"><img src="/images/logos/minutes.png" alt="flipkart-milnutes" /></div>
             <div className="text">Minutes</div>
          </div>
          <div className="nav-item">
             <div className="img"><img src="/images/logos/mob-tab.png" alt="tablet-phone" /></div>
             <div className="text">Mobiles & Tablets</div>
          </div>
          <div className="nav-item">
            <div className="img"><img src="/images/logos/fashion.png" alt="fashion" /></div>
             <div className="text">Fashion</div>
          </div>
          <div className="nav-item">
            <div className="img"><img src="/images/logos/electro.png" alt="electronics" /></div>
             <div className="text">Electronics</div>
          </div>
          <div className="nav-item">
            <div className="img"><img src="/images/logos/flight.png" alt="flight" /></div>
             <div className="text">Flight Bookings</div>
          </div>
          <div className="nav-item">
            <div className="img"><img src="/images/logos/grocery.png" alt="grocery" /></div>
             <div className="text">Grocery</div>
          </div>
        </div>
      </nav>
    </header>
  );
}
