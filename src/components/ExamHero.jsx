

import React from "react";
import cambridge from '../assets/language1.jpg';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function ExamHero() {
    return (
      <section className="">
        {/* Image de fond floutée */}
    <section
           className="relative bg-center bg-no-repeat bg-cover bg-fixed text-white  h-96 flex items-center justify-center"
           style={{
             backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${cambridge})`,
           }}
         >
        
        {/* Contenu */}
        <div className="relative z-10 text-center px-4 text-white max-w-4xl">
          <h1 className="text-xl md:text-3xl font-bold mb-6">
            Préparation aux Examens Linguistiques
          </h1>
          <p className="mb-8">
            Maximisez vos chances de réussite avec nos programmes spécialisés
          </p>
          <a href='/Contact' className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
            S'inscrire maintenant
          </a>
        </div>
        </section>
      </section>
    )
  }