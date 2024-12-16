import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import HomeImage from "../assets/images/banner/bannerHome.webp";

import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner
          imageUrl={HomeImage}
          altText="Paysage montagnes "
          title="Chez vous, partout ailleurs"
        />
      </main>

      <Footer />
    </div>
  );
}

export default Home;
