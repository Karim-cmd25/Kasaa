import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/scss/details.scss"; // Assure-toi que le fichier .scss contient les styles correspondants.

function Details() {
  const { id } = useParams(); // Récupère l'ID de la carte depuis l'URL
  const [location, setLocation] = useState(null);

  // Fetch pour récupérer les données du fichier JSON
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();

      const foundLocation = data.find((location) => location.id === id);
      setLocation(foundLocation);
    };
    fetchData();
  }, [id]); // On refait la requête dès que l'ID change.

  if (!location) {
    return <div className="loading">Chargement...</div>; // Ajout d'une classe de style "loading"
  }

  return (
    <div className="details__page">
      <Header />

      <main className="details__content">
        {/* Conteneur Flexbox pour aligner la description à gauche et l'hôte à droite */}
        <div className="details__main-container">
          <section className="details__description">
            <h1 className="details__title">{location.title}</h1>
            <img
              className="details__image"
              src={location.cover}
              alt={location.title}
            />
            <p className="details__text">{location.description}</p>
          </section>

          {/* Partie Hôte alignée à droite */}
          <section className="details__host">
            <div className="details__host-info">
              <img
                className="details__host-image"
                src={location.host.picture}
                alt={location.host.name}
              />
              <div className="details__host-name">{location.host.name}</div>
            </div>
          </section>
        </div>

        <section className="details__equipments">
          <h2 className="details__equipments-title">Équipements :</h2>
          <ul className="details__equipments-list">
            {location.equipments.map((equip, index) => (
              <li className="details__equipments-item" key={index}>
                {equip}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Details;
