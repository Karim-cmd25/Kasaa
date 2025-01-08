import React, { useState } from "react";
import Vector from "../assets/images/arrow/vector.png";
import "../assets/styles/scss/carrousel.scss";

const SlideShow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      {/* Afficher le bouton de gauche seulement si plus d'une image */}
      {pictures.length > 1 && (
        <img
          src={Vector}
          onClick={goToPrevious} // Fonction pour aller à l'image précédente
          className="carousel__button carousel__button-left"
          alt="Previous Slide"
        />
      )}

      {/* Image du carousel */}
      <div className="carousel__image-container">
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel__image"
        />
      </div>

      {/* Afficher le bouton de droite seulement si plus d'une image */}
      {pictures.length > 1 && (
        <img
          src={Vector}
          onClick={goToNext} // Fonction pour aller à l'image suivante
          className="carousel__button carousel__button-right"
          alt="Next Slide"
        />
      )}

      {/* Pagination */}
      <div className="carousel__pagination">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
};

export default SlideShow;
