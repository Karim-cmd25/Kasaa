import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/scss/nav.scss";

function Nav() {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__list">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navbar__link active" : "navbar__link"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li className="navbar__list">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navbar__link active" : "navbar__link"
            }
          >
            A Propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
