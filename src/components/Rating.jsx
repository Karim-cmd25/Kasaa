import React from "react";
import fullStar from "../assets/images/rate/fullStar.png";
import emptyStar from "../assets/images/rate/emptyStar.png";

import "../assets/styles/scss/ratings.scss";

function Rating({ rating }) {
  // Converti la note en nombre entier et la limite à 5
  const starRating = Math.min(parseInt(rating, 10), 5);

  // Création d'un tableau d'étoiles pleines et vides en fonction de la note
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < starRating) {
      stars.push(<img key={i} src={fullStar} alt="star" />);
    } else {
      stars.push(<img key={i} src={emptyStar} alt="star" />);
    }
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;

// parseInt : C’est une fonction JavaScript qui convertit une chaîne de caractères en un nombre entier.
// rating : C’est la valeur que je veux convertir en nombre. Donc ici c'est la note du logement sous forme de chaîne.
// 10 : indique que la chaîne est en base décimale.
// Donc, parseInt(rating, 10) convertit la chaîne rating en un nombre entier. Par exemple, si rating est "4", alors parseInt(rating, 10) renverra 4.
// Math.min : fonction qui retourne la plus petite valeur parmi les arguments passés.
// parseInt(rating, 10) : C’est la valeur entière obtenue précédemment.
// 5 : C’est la valeur maximale que je veux pour la note.

// exemple :
// Si rating est "7", parseInt(rating, 10) sera 7, et Math.min(7, 5) retournera 5.
// Si rating est "4", parseInt(rating, 10) sera 4, et Math.min(4, 5) retournera 4.
