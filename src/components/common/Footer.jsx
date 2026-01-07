import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'


export default function Footer(){

  return <footer >
    <div className="top">
      <div className="about">
        <small>ABOUT</small>
        <ul>
          <li>Contact</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Flipkart Stories</li>
          <li>Press</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <div className="grp-comp">
        <small>GROUP COMPANIES</small>
        <ul>
          <li>Shopsy</li>
          <li>Cleartrip</li>
          <li>Myntra</li>
        </ul>
      </div>
      <div className="help">
        <small>HELP</small>
        <ul>
          <li>Payments</li>
          <li>Shipping</li>
          <li>Cancellation</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="com-policy">
        <small>CUSTOMER POLICY</small>
        <ul>
          <li>Cancellation & returns</li>
          <li>Terms of Use</li>
          <li>Security</li>
        </ul>
      </div>
      <div className="v-line"></div>
      <div className="mail">
        <small>MAIL US:</small>
        <div className="mailadrr">mail line 1<br></br>mail line 2<br></br>mail line 3</div>
      </div>
      <div className="address">
        <small>REGISTERED OFFICE ADDRESS</small>
        <div className="mailadrr">
          office-addr line 1<br></br>office-addr line 2<br></br>office-addr line 3
        </div>
      </div>
    </div>
    <div className="h-line"></div>
    <div className="bottom">
      <Link to="/seller">Become a Seller</Link>
      <div className="asv">Advertise</div>
      <div className="gift">Gift Cards</div>
      <div className="help">Help Center</div>
      <div className="com">Flipkart.com</div>
    </div>
    
  </footer>;
}
