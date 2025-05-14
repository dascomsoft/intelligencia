

import React from "react";


export default function SuccessRates() {
    const stats = [
      {
        exam: "Goethe B1",
        rate: "92%",
        description: "de réussite sur les 12 derniers mois"
      },
      {
        exam: "TestDaF",
        rate: "88%",
        description: "de nos étudiants obtiennent le niveau requis"
      },
      {
        exam: "IELTS 6.5+",
        rate: "95%",
        description: "atteignent leur score cible"
      },
      {
        exam: "CILS B2",
        rate: "90%",
        description: "de réussite à la première tentative"
      }
    ];
  
    return (
      <section className="py-20 px-4 bg-blue-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nos Taux de Réussite
          </h2>
          <p className="text-xl text-center mb-12 opacity-90 max-w-3xl mx-auto">
            Des résultats qui parlent d'eux-mêmes
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-xl p-8 text-center backdrop-filter backdrop-blur-sm">
                <div className="text-5xl font-bold mb-2">{stat.rate}</div>
                <h3 className="text-xl font-semibold mb-2">{stat.exam}</h3>
                <p className="opacity-80">{stat.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white bg-opacity-10 rounded-xl p-8 backdrop-filter backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Pourquoi un tel succès?</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Formateurs experts des examens</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Matériel pédagogique actualisé</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Stratégies spécifiques pour chaque épreuve</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-300 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Suivi individualisé jusqu'au jour J</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }