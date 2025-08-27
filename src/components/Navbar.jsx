

// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../assets/logo-intelligencia.jpg'

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 a-3 flex justify-between items-center">
        {/* <h1 className="text-xl font-bold text-blue-700">Intelligencia</h1> */}
        <a href='/'>
        <img src={logo} className='w-20 h-20 rounded-full' />
        </a>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <button className="text-black-700">
            {/* Icône hamburger SVG remplaçant le texte "Menu" */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 text-sm text-gray-700 font-medium">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/formations">Formations</Link></li>
          <li><Link to="/immigration">Immigration</Link></li>
          <li><Link to="/annonces">Annonces</Link></li>
          <li><Link to="/prix">Prix</Link></li>
          <li><Link to="/examens">Examens</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-2 text-gray-700">
            <li><Link to="/" onClick={() => setOpen(false)}>Accueil</Link></li>
            <li><Link to="/formations" onClick={() => setOpen(false)}>Formations</Link></li>
            <li><Link to="/immigration" onClick={() => setOpen(false)}>Immigration</Link></li>
            <li><Link to="/annonces" onClick={() => setOpen(false)}>Annonces</Link></li>
            <li><Link to="/prix" onClick={() => setOpen(false)}>Prix</Link></li>
            <li><Link to="/examens" onClick={() => setOpen(false)}>Examens</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}