import React from "react";
import './Login.css'
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <>
        <div className="login">
            <div className="left">
                <div className="img"><img src="" alt=""/></div>
            </div>
            <div className="right">
                <div className="login-text">
                    <h2>Login</h2>
                    <div className="text-gray">Get access to your Orders,Wishlist and Recommendations</div>
                </div>
                <div className="email">
  <div className="text">Enter Email</div>
  <input type="email" />
</div>

                <div className="email">
  <div className="text">Enter Password</div>
  <input type="password" />
</div>
                <div className="join">
                                    <div className="button1">Login</div>
                <div className="button2"><Link to="/signup">Sign Up</Link></div>
                </div>
                <div className="text">We no longer support login via Social accounts. To recover your old accounts</div>
            </div>
        </div>
        </>
    );

}