import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.png'

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="/" className="logo">
        <img src={logo} alt="logo"/>
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon" for="menu-btn"></span>
      </label>
      <ul className="menu">
        <li>
          <NavLink
            exact
            to={{
              pathname: `/category/Dish`,
              state: {name:"Dish"}
            }}
            className="nav-link"
            activeClassName="active-link"
          >
            Dishes
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={{
              pathname: '/category/Dessert',
              state: {name:"Dessert"}
            }}
            className="nav-link"
            activeClassName="active-link"
          >
            Desserts
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to={{
              pathname: '/category/Drink',
              state: {name:"Drink"}
            }}
            className="nav-link"
            activeClassName="active-link"
          >
            Drinks
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/contact"
            className="nav-link"
            activeClassName="active-link"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
