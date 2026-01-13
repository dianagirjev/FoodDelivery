import React, { useState, type Dispatch, type SetStateAction } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

type LoginPopupProps = {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
};

const LoginPopup = ({ setShowLogin }: LoginPopupProps) => {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container flex flex-col gap-6">
        <div className="popup-title flex justify-between items-center">
          <h2>{currState}</h2>
          <img
            className="cursor-pointer"
            onClick={() => {
              setShowLogin(false);
            }}
            src={assets.cross_icon}
            alt="Cross Icon"
          />
        </div>
        <div className="popup-inputs flex flex-col gap-5">
          {currState === "Sign Up" && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="popup-condition flex gap-2 items-center">
          <input type="checkbox" required />
          <p>
            By continuing, I agree to the terms of{" "}
            <a href="#">user & privacy policy.</a>
          </p>
        </div>
        <div className="switch-sign-up-form">
          {currState === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login Here!</span>
            </p>
          ) : (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Click Here!</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
