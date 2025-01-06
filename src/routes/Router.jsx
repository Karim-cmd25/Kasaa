// src/Router.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import About from "../pages/About"; // Assure-toi d'utiliser l'importation par défaut
import Error404 from "../pages/NoPage"; // Page 404

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/about" element={<About />} />{" "}
      {/* Ajoute la route pour About */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Router;
