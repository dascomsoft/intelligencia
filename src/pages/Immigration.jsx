
import { useEffect } from "react";
import React from "react";
import image2 from '../assets/image2.jpg'
import travel from '../assets/travel.jpg'
import travel1 from '../assets/travel1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Immigration() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    // Faire défiler vers le haut au chargement de la page
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="">
      <section
        className="relative bg-center bg-no-repeat bg-cover bg-fixed text-white py-24 px-6"
        style={{
          backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${travel1})`,
        }}
      >
        <div className="container px-6 mx-auto">
          <h1 className="text-4xl md:text-4xl font-bold mb-6">
            🌍 Réalisez votre rêve d’immigrer avec Intelligencia
          </h1>
          <p className="text-xl md:text-xl mb-8 max-w-3xl">
            Que ce soit pour les études, le travail ou un projet de vie à l’étranger, notre équipe vous accompagne de A à Z.
          </p>
          <a
            href="#procedure"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            Découvrez notre procédure
          </a>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div data-aos="zoom-in-left" data-aos-delay="100">
            <h2 className="text-3xl font-bold text-indigo-800 mb-4">Pourquoi nous faire confiace ?</h2>
            <ul className="space-y-3 text-lg">
              <li>✅ Dossiers traités avec soin et rigueur</li>
              <li>✅ Accompagnement pour la prise de rendez-vous à l’ambassade</li>
              <li>✅ Préparation aux entretiens d’ambassade</li>
              <li>✅ Assistance pour le choix de l’école ou de l’employeur</li>
            </ul>
          </div>
          <div>
            <img src={image2} alt="Accompagnement visa" className="rounded-2xl shadow-xl" data-aos="zoom-in-right" data-aos-delay="200"/>
          </div>
        </div>
      </section>



      <section id="procedure" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">
            ✈️ Étapes de la procédure d’immigration avec Intelligencia
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="shadow-xl p-4" data-aos="zoom-in-right" data-aos-delay="100">
              <span className="text-4xl">📄</span>
              <h3 className="font-semibold text-xl my-3">1. Évaluation du dossier</h3>
              <p>Analyse complète de votre profil, objectifs, et pays ciblé.</p>
            </div>
            <div className="shadow-xl p-4" data-aos="zoom-in-right" data-aos-delay="200">
              <span className="shadow-xl p-4">🎓</span>
              <h3 className="font-semibold text-xl my-3">2. Formation & Examens</h3>
              <p>Cours de langues, coaching personnalisé, préparation au B1, IELTS, etc.</p>
            </div>
            <div className="shadow-xl p-4" data-aos="zoom-in-right" data-aos-delay="300">
              <span className="text-4xl">📝</span>
              <h3 className="font-semibold text-xl my-3">3. Dossier & Ambassade</h3>
              <p>Constitution et dépôt du dossier, préparation à l’entretien.</p>
            </div>
            <div className="shadow-xl p-4" data-aos="zoom-in-right" data-aos-delay="400">
              <span className="text-4xl">✅</span>
              <h3 className="font-semibold text-xl my-3">4. Visa & Départ</h3>
              <p>Suivi du visa et conseils pratiques avant le départ.</p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-12">🎉 Ils ont réussi avec Intelligencia</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow" data-aos="zoom-in-right" data-aos-delay="100">
              <p>🇩🇪 “Grâce à Intelligencia, j’ai obtenu mon visa pour l’Allemagne après ma formation B1 ! Merci pour l’accompagnement de qualité.”</p>
              <p className="mt-4 font-semibold">– Chantal N., Yaoundé</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow" data-aos="zoom-in-right" data-aos-delay="200">
              <p>🇮🇹 “Le centre m’a aidé à préparer le CELI et à déposer un dossier impeccable pour l’Italie. Je suis aujourd’hui à Naples !”</p>
              <p className="mt-4 font-semibold">– Fabrice M., Douala</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow" data-aos="zoom-in-right" data-aos-delay="300">
              <p>🇨🇦 “J’ai suivi les cours d’anglais et obtenu mon IELTS avec un bon score. Je suis désormais étudiant au Canada.”</p>
              <p className="mt-4 font-semibold">– Stéphanie T., Bafoussam</p>
            </div>
          </div>
        </div>
      </section>


      <section
        className="relative bg-center bg-no-repeat bg-cover bg-fixed text-white py-20 px-6"
        style={{
          backgroundImage: `radial-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)), url(${travel})`,
        }}
      >
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">📞 Parlez à un expert dès maintenant</h2>
          <p className="text-lg md:text-xl mb-8">
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

          <div className="text-white text-base md:text-lg space-y-4">
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



    </section>
  );
}