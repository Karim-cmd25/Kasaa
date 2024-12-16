import React from "react";
import logo from "../assets/images/logo/logo_footer.png";
import "../assets/styles/layout/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Logo Kasa" />
      <p className="footer__text-copyright">© 2024 Kasa. All right reserved</p>
    </footer>
  );
}

export default Footer;
