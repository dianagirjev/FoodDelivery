import React, { useState, type Dispatch, type SetStateAction } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useStore } from "../../context/StoreContext";

type NavbarProps = {
  setShowLogin: Dispatch<SetStateAction<boolean>>;
};

function Navbar({ setShowLogin }: NavbarProps) {
  const [menu, setMenu] = useState("Home");
  const { getTotalAmount } = useStore();

  return (
    <div className="navbar flex justify-between items-center">
      <Link to="/">
        <img src={assets.logo} alt="Logo Image" className="logo" />
      </Link>
      <ul className="navbar-menu flex items-center gap-10">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          <a href="#explore-menu">Menu</a>
        </li>
        <li
          onClick={() => setMenu("Mobile App")}
          className={menu === "Mobile App" ? "active" : ""}
        >
          <a href="#app-download">Mobile App</a>
        </li>
        <li
          onClick={() => setMenu("Contact Us")}
          className={menu === "Contact Us" ? "active" : ""}
        >
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
      <div className="navbar-right flex items-center gap-6">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-basket-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>
          {getTotalAmount() > 0 && <div className="dot"></div>}
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
