import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Details() {
  const { id } = useParams(); // Récupère l'ID de la carte depuis l'URL
  const [location, setLocation] = useState(null);

  // fetch pour fichieer json
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();

      const foundLocation = data.find((location) => location.id === id);
      setLocation(foundLocation);
    };
    fetchData();
  }, [id]); //

  if (!location) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>{location.title}</h1>
      <img src={location.cover} alt={location.title} />
      <p>{location.description}</p>
      <ul>
        {location.equipments.map((equip, index) => (
          <li key={index}>{equip}</li>
        ))}
      </ul>
    </div>
  );
}

export default Details;
