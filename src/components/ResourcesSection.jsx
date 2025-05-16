

import React from "react";
import atelier from '../assets/centre-pic1.jpg';




export default function ResourcesSection() {
    const resources = [
      {
        type: "Bibliothèque",
        title: "Manuels officiels",
        description: "Accès à tous les manuels de préparation des éditeurs spécialisés",
        icon: "📚"
      },
      {
        type: "En ligne",
        title: "Plateforme e-learning",
        description: "Exercices interactifs et suivi de progression 24/7",
        icon: "💻"
      },
      {
        type: "Audio",
        title: "Banque d'enregistrements",
        description: "Plus de 500 heures d'audio pour la compréhension orale",
        icon: "🎧"
      },
      {
        type: "Examens",
        title: "Annales corrigées",
        description: "Archives complètes des sessions précédentes",
        icon: "📝"
      }
    ];
  
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Ressources Pédagogiques
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            Tout ce dont vous avez besoin pour réussir
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition duration-300">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                  {resource.type}
                </span>
                <h3 className="text-xl font-bold mt-2 text-gray-800">{resource.title}</h3>
                <p className="text-gray-600 mt-4">{resource.description}</p>
              
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-100 rounded-xl p-8 md:p-12">
            <div className="md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Ateliers Spéciaux</h3>
                <p className="text-gray-600 mb-4">
                  Nos ateliers thématiques vous préparent spécifiquement aux différentes épreuves des examens.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Expression orale: techniques pour gérer le stress</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Rédaction: structures gagnantes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Compréhension: stratégies de lecture rapide</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={atelier}
                  alt="Atelier de préparation aux examens"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }