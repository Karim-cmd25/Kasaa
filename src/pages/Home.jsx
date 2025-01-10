import { useState, useEffect } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import HomeImage from "../assets/images/banner/bannerHome.webp";
import Card from "../components/Card";

import Footer from "../components/Footer";

function Home() {
  // Utilisation du hook useState avec [variable, setVariable] = useState([]); initialise la variable ([]) avec un tableau vide
  const [locations, setLocations] = useState([]);
  console.log(locations);

  // useEffect hook qui se lance au premier render et lance un nouveau render à chaque fois que la valeur (deuiéme argument) change
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");

      const data = await response.json();
      setLocations(data);
    };
    fetchData();
  }, []); // []); deuxiéme argument de useEffect, si il change la fonction est exécuté à nouveau

  return (
    <>
      <Header />
      <main>
        <Banner
          imageUrl={HomeImage}
          altText="Paysage montagnes "
          title="Chez vous, partout et ailleurs"
        />
        {locations.map((location) => (
          <Card
            title={location.title}
            cover={location.cover}
            id={location.id}
            key={location.id}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default Home;
