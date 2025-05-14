// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Intelligencia</h1>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <button className="text-blue-700">Menu</button>
        </div>
        <ul className="hidden md:flex space-x-6 text-sm text-gray-700 font-medium">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/formations">Formations</Link></li>
          <li><Link to="/immigration">Immigration</Link></li>
          <li><Link to="/annonces">Annonces</Link></li>
          {/* <li><Link to="/calendrier">Calendrier</Link></li> */}
          <li><Link to="/examens">Examens</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-gray-700">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/formations">Formations</Link></li>
            <li><Link to="/immigration">Immigration</Link></li>
            <li><Link to="/annonces">Annonces</Link></li>
            {/* <li><Link to="/calendrier">Calendrier</Link></li> */}
            <li><Link to="/examens">Examens</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
