

import { useEffect } from "react";
import React from "react";
import travel from '../assets/travel.jpg'


const Prix = () => {

    useEffect(() => {
      // Faire défiler vers le haut au chargement de la page
      window.scrollTo(0, 0);
    }, []);

  const cours = [
    {
      langue: "Allemand",
      niveaux: [
        { niveau: "A1", prix: "120 000 FCFA", duree: "2 mois" },
        { niveau: "A2", prix: "120 000 FCFA", duree: "2 mois" },
        { niveau: "B1", prix: "130 000 FCFA", duree: "2 mois" },
        { niveau: "B2", prix: "130 000 FCFA", duree: "2 mois" },
      ],
    },
    {
      langue: "Italien",
      niveaux: [
        { niveau: "A1", prix: "75 000 FCFA", duree: "2 mois" },
        { niveau: "A2", prix: "75 000 FCFA", duree: "2 mois" },
        { niveau: "B1", prix: "100 000 FCFA", duree: "2 mois" },
        { niveau: "B2", prix: "100 000 FCFA", duree: "2 mois" },
      ],
    },
    {
      langue: "Anglais",
      niveaux: [
        { niveau: "A1", prix: "75 000 FCFA", duree: "2 mois" },
        { niveau: "A2", prix: "75 000 FCFA", duree: "2 mois" },
        { niveau: "B1", prix: "100 000 FCFA", duree: "2 mois" },
        { niveau: "B2", prix: "100 000 FCFA", duree: "2 mois" },
      ],
    },
  ];

  return (
    <div>
      <div className=" bg-gray-100 py-[4rem] px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">Grille des Prix des Formations</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cours.map((cours, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h2 className="text-xl font-semibold text-indigo-600 mb-4">{cours.langue}</h2>
                <ul className="space-y-3">
                  {cours.niveaux.map((niveau, i) => (
                    <li key={i} className="border-b pb-2">
                      <div className="flex justify-between font-medium text-gray-700">
                        <span>{niveau.niveau}</span>
                        <span>{niveau.prix}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Durée : {niveau.duree}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section
        className="relative bg-center bg-no-repeat bg-cover bg-fixed text-white py-20 px-6"
        style={{
          backgroundImage: `radial-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(${travel})`,
        }}
      >
        <div className="container px-6 mx-auto">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-green-400">📞 Parlez à un expert dès maintenant</h2>
          <p className="mb-8">
            Vous êtes prêt à lancer votre projet d’immigration ? Cliquez ci-dessous pour discuter avec notre conseiller sur WhatsApp.
          </p>

          <a
            href="https://wa.me/237694037085?text=Bonjour%20Intelligencia%20!%20Je%20souhaite%20avoir%20des%20informations%20sur%20la%20procédure%20d'immigration%20et%20les%20formations%20associées.%20Merci%20de%20me%20recontacter."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition mb-6"
          >
            📲 Discuter sur WhatsApp
          </a>

          <div className="text-white space-y-4">
            <p>
              💬 Notre équipe vous répond rapidement du <strong>lundi au samedi, de 8h à 18h</strong>.
            </p>
            <p>
              🛂 Nous vous orientons gratuitement sur la procédure adaptée à votre profil : <br />
              <span className="italic">études à l’étranger, regroupement familial, immigration professionnelle, etc.</span>
            </p>
            <p>
              🎓 Vous recevrez aussi des conseils personnalisés sur les <strong>formations linguistiques</strong> à suivre (allemand B1-B2, anglais IELTS, etc.) en ligne ou en présentiel.
            </p>
            <p>
              ✅ Chez Intelligencia, nous misons sur la clarté, la transparence et le résultat. Votre projet devient le nôtre.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prix;

