import React from "react";
export default function PreparationProcess() {
    const steps = [
      {
        step: "1",
        title: "Test de niveau",
        description: "Évaluation précise de vos compétences linguistiques actuelles",
        icon: "📝",
        duration: "1h"
      },
      {
        step: "2",
        title: "Plan personnalisé",
        description: "Élaboration d'un programme adapté à vos objectifs et délais",
        icon: "📅",
        duration: "Sur mesure"
      },
      {
        step: "3",
        title: "Formation intensive",
        description: "Cours focalisés sur les spécificités de l'examen cible",
        icon: "🎯",
        duration: "4-16 semaines"
      },
      {
        step: "4",
        title: "Examens blancs",
        description: "Simulations en conditions réelles avec correction détaillée",
        icon: "✍️",
        duration: "Réguliers"
      },
      {
        step: "5",
        title: "Coaching final",
        description: "Dernières recommandations et stratégies pour le jour J",
        icon: "🏆",
        duration: "1 semaine avant"
      }
    ];
  
    return (
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Notre Méthode de Préparation
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
            Une approche structurée pour une réussite garantie
          </p>
          
          <div className="relative">
            {/* Ligne de progression */}
            <div className="hidden md:block absolute left-16 top-0 bottom-0 w-1 bg-blue-200 transform translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              {steps.map((step, index) => (
                <div key={index} className="relative md:flex items-start">
                  {/* Bulle sur la ligne */}
                  <div className="hidden md:flex absolute left-16 top-6 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full items-center justify-center text-white font-bold z-10">
                    {step.step}
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:pl-0 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <div className={`bg-white p-6 rounded-lg shadow-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="text-4xl mb-3">{step.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{step.title}</h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="text-sm text-blue-600 font-medium">
                        Durée: {step.duration}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }