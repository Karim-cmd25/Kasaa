import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse"; // Importation du composant Collapse
import "../assets/styles/scss/details.scss";
import Rating from "../components/Rating"; // Assurez-vous que ce composant est utilisé correctement
import Slideshow from "../components/SlidesShow"; // Import du composant Slideshow
import Error from "./NoPage";

function Details() {
  const { id } = useParams(); // Récupère l'ID de la carte depuis l'URL
  const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Gestion de l'état de chargement
  const [error, setError] = useState(null); // Gestion des erreurs

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Début du chargement
      setError(null); // Réinitialise l'erreur au cas où

      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Échec de la récupération des données");
        }

        const data = await response.json();
        const foundLocation = data.find((location) => location.id === id);

        if (foundLocation) {
          setLocation(foundLocation); // Mise à jour de l'état avec les données trouvées
        } else {
          navigate("/404"); // Redirige l'utilisateur vers la page d'erreur si l'ID n'est pas trouvé
        }
      } catch (err) {
        setError(err.message); // Gestion des erreurs de la requête
        navigate("/404"); // Redirige aussi vers la page d'erreur en cas de problème avec la requête
      } finally {
        setIsLoading(false); // Fin du chargement
      }
    };

    fetchData();
  }, [id, navigate]); // Ajout de navigate pour s'assurer qu'il est bien inclus dans les dépendances

  if (isLoading) {
    return <div className="loading">Chargement...</div>; // Ajout d'une classe de style "loading"
  }

  if (error) {
    return <Error />; // Affichage d'une erreur si la requête échoue
  }

  if (!location) {
    return <Error />; // Cette ligne est redondante, car navigate() fera déjà la redirection
  }

  return (
    <>
      <Header />

      <main className="details__content">
        <div className="details__main-container">
          <section className="details__description">
            <Slideshow pictures={location.pictures} />
            <h1 className="details__title">{location.title}</h1>
            <section className="details__location">
              <p>{location.location}</p>
            </section>
          </section>

          {/* Conteneur pour les tags et l'hôte */}
          <section className="details__tags-and-host">
            {/* Affichage des tags */}
            <div className="details__tags">
              {location.tags.map((tag, index) => (
                <span className="details__tag" key={index}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Section de l'hôte et de la note */}
            <div className="details__host">
              <div className="details__host-info">
                <img
                  className="details__host-image"
                  src={location.host.picture}
                  alt={location.host.name}
                />
                <div className="details__host-name">{location.host.name}</div>
              </div>
              <div className="details__rating">
                <Rating rating={location.rating} />
              </div>
            </div>
          </section>
        </div>

        {/* Utilisation de Collapse pour les équipements */}
        <section className="details__equipments">
          <Collapse title="Description">
            <p className="details__text">{location.description}</p>
          </Collapse>

          <Collapse title="Équipements">
            <ul className="details__equipments-list">
              {location.equipments.map((equip, index) => (
                <li className="details__equipments-item" key={index}>
                  {equip}
                </li>
              ))}
            </ul>
          </Collapse>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Details;
