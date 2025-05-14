// import React from "react";

// export default function Footer() {
//     return (
//       <footer className="bg-slate-900 text-white py-[5rem] bg-linear-to-t from-sky-500 to-indigo-500">
//         <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6 text-sm">
//           <div>
//             <h3 className="font-bold text-lg mb-2">Intelligencia</h3>
//             <p>Centre de formation en langues étrangères (Allemand, Italien et Anglais). Préparation aux examens et accompagnement pour l’immigration.</p>
//           </div>
//           <div>
//             <h3 className="font-bold mb-2 text-2xl">Liens utiles</h3>
//             <ul className="space-y-1">
//               <li>Formations</li>
//               <li>Procédures</li>
//               <li>Contact</li>
//               <li>Examens</li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-bold mb-2 text-2xl">Nous contacter</h3>
//             <p>Téléphone : +237 63585388</p>
//             <p>Email :kamenifrank220@gmail.com</p>
//             <p>Descente Sorcier : Yaoundé, Cameroun</p>
//           </div>
//         </div>
//       </footer>
//     );
//   }




// src/components/Footer.jsx

import React from "react";
import { FaFacebook, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-[7rem] pb-[3rem]">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo et description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Centre Intelligencia</h2>
          <p className="text-sm text-gray-400">
          Centre de formation en langues étrangères (Allemand, Italien et Anglais). Préparation aux examens et accompagnement pour l’immigration.
          </p>
        </div>

   

        {/* Contact et réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="flex items-center gap-2 text-sm text-gray-300">
            <FaMapMarkerAlt /> Yaounde, Cameroun
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-300 mt-2">
            <FaEnvelope /> intelligenciacenter@gmail.com
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-500">
              <FaFacebook size={20} />
            </a>
            <a href="https://wa.me/237694037085" target="_blank" className="hover:text-green-400">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>
             {/* Liens rapides */}
             <div>
          <h3 className="text-lg font-semibold mb-3">Liens rapides</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-blue-400">Accueil</a></li>
            <li><a href="/Immigration" className="hover:text-blue-400">Immigration</a></li>
            <li><a href="/Formations" className="hover:text-blue-400">Formations</a></li>
            <li><a href="/Annonces" className="hover:text-blue-400">Annonces</a></li>
            <li><a href="/Examens" className="hover:text-blue-400">Examens</a></li>

            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Centre Intelligencia. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;

  