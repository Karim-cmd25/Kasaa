import React from "react";
import "../assets/styles/scss/banner.scss";

function Banner({ imageUrl, altText, title, isDarkened = true }) {
  return (
    <div className="banner">
      <img
        src={imageUrl}
        alt={altText}
        className={`banner__image ${
          isDarkened ? "banner__image--darkened" : ""
        }`}
      />
      <h1 className="banner__text">{title}</h1>
    </div>
  );
}

export default Banner;
