

import React, { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const form = useRef();

  useEffect(() => {
    // Faire défiler vers le haut au chargement de la page
    window.scrollTo(0, 0);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zm0fd89",       // 🔁 Remplace par ton Service ID
        "template_4v41yxe",      // 🔁 Remplace par ton Template ID
        form.current,
        "qcRw8E0rc-auZeBDc"  // 🔁 Remplace par ta Clé publique
      )
      .then(
        (result) => {
          alert("✅ Message envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          alert("❌ Une erreur est survenue. Veuillez réessayer.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="py-20 px-4 text-white bg-linear-to-r/oklch from-indigo-500 to-teal-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à commencer votre aventure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contactez-nous pour une évaluation gratuite de votre profil et découvrez comment nous pouvons vous aider.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="grid-col-1">
                  <div>
                    <h3 className="font-semibold text-2xl">Téléphone</h3>
                    <p><b>+49 163 9283544 / +237653585388 / 694037085</b></p>
                  </div>
                  <br />
                  <div>
                    <h3 className="font-semibold text-2xl">WhatsApp</h3>
                    <p><b>+49 163 9283544 / +237653585388 / 694037085</b></p>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p>intelligenciacentergmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Adresse</h3>
                  <p>123 Descente Sorcier, Yaoundé - Cameroun</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire EmailJS */}
          <div className="bg-white rounded-lg shadow-xl p-8 text-gray-800">
            <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">Nom complet</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block mb-1 font-medium">Service intéressé</label>
                <select
                  id="service"
                  name="user_service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Sélectionnez un service</option>
                  <option value="allemand">Cours d'Allemand</option>
                  <option value="italien">Cours d'Italien</option>
                  <option value="anglais">Cours d'Anglais</option>
                  <option value="visa">Accompagnement Visa</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Décrivez votre demande..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
