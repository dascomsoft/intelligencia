


import React, { useEffect, useState } from "react";
import axios from "axios";

const sheetId = "1aBMll5430SkooMqK5uIjuBFn-cK-T6KNRNctG3uV0NA";

const Annonces = () => {
  const [annonces, setAnnonces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnonces = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${import.meta.env.VITE_GOOGLE_API_KEY}`
        );
        const rows = response.data.values;

        // Enlever la première ligne si c’est l’en-tête (Titre | Contenu | Date | Image | Lien)
        const data = rows.slice(1);

        // Filtrer les lignes valides (où il y a un titre ET un contenu minimum)
        const annoncesValides = data.filter((row) => row[0] && row[1]);

        setAnnonces(annoncesValides);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des annonces", error);
        setLoading(false);
      }
    };

    fetchAnnonces();
  }, []);

  return (
    <div className="container mx-auto py-[5rem]">
      <h1 className="text-xl font-bold text-center mb-6">Annonces du Centre Intelligencia</h1>

      {loading ? (
        <p className="text-center">Chargement des annonces...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {annonces.map((annonce, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h2 className="font-bold mb-2">{annonce[0]}</h2>
              <p className="text-gray-700 mb-2">{annonce[1]}</p>
              {annonce[2] && <p className=" text-gray-500">📅 {annonce[2]}</p>}
         
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Annonces;
