import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Error404 from "../components/Error";

function NoPage() {
  return (
    <div className="no-page">
      <Header />
      <main>
        <Error404 />
      </main>
      <Footer />
    </div>
  );
}

export default NoPage;
