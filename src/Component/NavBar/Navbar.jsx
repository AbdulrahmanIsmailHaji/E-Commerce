import React, { useContext, useState } from "react";
import classes from "./NavBar.module.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext);

  return (
    <div className={classes.navbar}>
      <div className={classes["nav-logo"]}>
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className={classes["nav-menu"]}>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/shop">Shop</Link> {menu === "shop" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/mens">Men</Link> {menu === "men" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">Women</Link> {menu === "women" ? <hr /> : ""}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : ""}
        </li>
      </ul>
      <div className={classes["nav-login-cart"]}>
        <Link to="login">
          <button
            onClick={() => {
              setMenu("login");
            }}
          >
            login
          </button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} />
        </Link>
        <div className={classes["nav-cart-count"]}>{getTotalCartItem()}</div>
      </div>
    </div>
  );
};

export default Navbar;
