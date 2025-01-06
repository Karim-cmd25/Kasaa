import React, { useState } from "react";
import Arrow from "../assets/images/arrow/Arrow.png";
import "./collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // change la valeur de isOpen de true à false, et vice-versa
  };

  return (
    <div className={`collapse ${isOpen ? "open" : "closed"}`}>
      <div
        className={`collapse__header ${isOpen ? "open" : ""}`}
        onClick={toggleCollapse}
      >
        <h2>{title}</h2>
        <img
          src={Arrow}
          alt={isOpen ? "Collapse" : "Expand"}
          className={`collapse__icon ${isOpen ? "rotate" : ""}`}
        />
      </div>
      <div className={`collapse__content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
