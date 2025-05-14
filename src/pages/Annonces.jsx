



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// // Remplace par l'ID de ta feuille Google Sheets
// const sheetId = "1aBMll5430SkooMqK5uIjuBFn-cK-T6KNRNctG3uV0NA";

// const Annonces = () => {
//   const [annonces, setAnnonces] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Récupérer les données de la feuille Google Sheets via l'API
//     const fetchAnnonces = async () => {
//       try {
//         const response = await axios.get(
//           `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${import.meta.env.VITE_GOOGLE_API_KEY}`
//         );
//         const data = response.data.values;
//         setAnnonces(data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Erreur lors de la récupération des annonces", error);
//         setLoading(false);
//       }
//     };

//     fetchAnnonces();
//   }, []);

//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-4xl font-bold text-center mb-8">Annonces du Centre Intelligencia</h1>

//       {loading ? (
//         <div className="text-center">Chargement des annonces...</div>
//       ) : (
//         <div>
//           {annonces && annonces.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {annonces.map((annonce, index) => (
//                 <div
//                   key={index}
//                   className="border rounded-lg shadow-lg p-6 bg-white hover:bg-gray-100 transition duration-300"
//                 >
//                   <h2 className="text-2xl font-semibold mb-4">{annonce[0]}</h2> {/* Titre */}
//                   <p className="text-lg mb-4">{annonce[1]}</p> {/* Contenu */}
//                   <span className="text-sm text-gray-500">{annonce[2]}</span> {/* Date */}
//                   {/* {annonce[3] && <img src={annonce[3]} alt={annonce[0]} className="w-full h-auto mt-4" />} Image */}
//                   {annonce[4] && (
//                     <a
//                       href={annonce[4]}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-green-600 hover:text-green-700 mt-4 block"
//                     >
//                       Voir les détails
//                     </a>
//                   )}
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>Aucune annonce à afficher.</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Annonces;









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
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Annonces du Centre Intelligencia</h1>

      {loading ? (
        <p className="text-center">Chargement des annonces...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {annonces.map((annonce, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <h2 className="text-xl font-bold mb-2">{annonce[0]}</h2>
              <p className="text-gray-700 mb-2">{annonce[1]}</p>
              {annonce[2] && <p className="text-sm text-gray-500">📅 {annonce[2]}</p>}
         
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Annonces;
