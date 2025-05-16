
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ExamContact() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs.sendForm(
      'service_zm0fd89',
      'template_4v41yxe',
      form.current,
      'qcRw8E0rc-auZeBDc'
    )
    .then(() => {
      alert("Message envoyé avec succès !");
      (form.current).reset();
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi :", error);
      alert("Une erreur est survenue.");
    });
  };

  return (
    <section className="py-20 px-4 bg-gray-700 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              Prêt à vous lancer?
            </h2>
            <p className="mb-8 opacity-90">
              Réservez une consultation gratuite avec l'un de nos experts pour:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Un test de niveau précis</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Un plan de formation personnalisé</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Des conseils pour choisir le bon examen</span>
              </li>
            </ul>
            <div className="flex items-center">
              <svg className="w-8 h-8 text-yellow-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-bold">Offre spéciale</p>
                <p className="text-sm opacity-80">-15% sur les préparations de plus de 8 semaines</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 bg-white rounded-lg shadow-xl p-8 text-gray-800">
            <h3 className="text-2xl font-bold mb-6">Demande d'information</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstname" className="block mb-1 font-medium">Prénom</label>
                  <input 
                    type="text" 
                    name="firstname"
                    id="firstname" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="block mb-1 font-medium">Nom</label>
                  <input 
                    type="text" 
                    name="lastname"
                    id="lastname" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input 
                  type="email" 
                  name="email"
                  id="email" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-1 font-medium">Téléphone</label>
                <input 
                  type="tel" 
                  name="phone"
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="exam" className="block mb-1 font-medium">Examen intéressé</label>
                <select 
                  id="exam"
                  name="exam"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Sélectionnez un examen</option>
                  <option value="goethe">Goethe-Zertifikat</option>
                  <option value="testdaf">TestDaF</option>
                  <option value="cils">CILS</option>
                  <option value="celi">CELI</option>
                  <option value="ielts">IELTS</option>
                  <option value="toefl">TOEFL</option>
                  <option value="cambridge">Cambridge</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
              >
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
