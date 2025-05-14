// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Formations from "./pages/Formations";
import Immigration from "./pages/Immigration";
import Annonces from "./pages/Annonces";
import Calendrier from "./pages/Calendrier";
import Examens from "./pages/Examens";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/immigration" element={<Immigration />} />
            <Route path="/annonces" element={<Annonces />} />
            <Route path="/calendrier" element={<Calendrier />} />
            <Route path="/examens" element={<Examens />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

