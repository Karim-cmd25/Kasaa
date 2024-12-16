import React from "react";
import logo from "../assets/images/logo/logo_header.svg";
import Nav from "./Nav";
import "../assets/styles/layout/header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Logo Kasa" />
      <Nav />
    </header>
  );
}

export default Header;
