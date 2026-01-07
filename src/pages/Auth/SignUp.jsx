import { Link } from "react-router-dom";
import "./SignUp.css";

export default function Signup() {
  return (
    <div className="signup">
      <div className="left">
        <div className="signup-text">
          <h2>Looks like you're new here!</h2>
          <p>Sign up with your email to get started</p>
        </div>
      </div>

      <div className="right">
        <div className="form">
          <div className="field">
            <label>Enter Name</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>Enter Email</label>
            <input type="email" />
          </div>

          <div className="field">
            <label>Enter Password</label>
            <input type="password" />
          </div>

          <div className="field">
            <label>Confirm Password</label>
            <input type="password" />
          </div>

          <div className="button3">Sign Up</div>

          <Link to="/login" className="login-link">
            Existing user? Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
