import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/scss/card.scss";

function Card({ id, title, cover }) {
  return (
    <Link to={`/accommodation/${id}`} className="card">
      <img src={cover} alt={title} className="card__image" />
      <h2 className="card__title">{title}</h2>
    </Link>
  );
}

export default Card;
