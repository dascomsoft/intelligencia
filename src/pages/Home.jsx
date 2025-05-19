import React from "react";
import { useEffect } from "react";
import background from '../assets/index.webp';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importez les styles AOS


export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durée de l'animation
      once: true, // animation ne se joue qu'une fois
    });
  }, []);

  useEffect(() => {
    // Faire défiler vers le haut au chargement de la page
    window.scrollTo(0, 0);
}, []);
  return (
    <section className="text-gray-800">
      <div>

        <section
          className="relative bg-center bg-no-repeat bg-cover bg-fixed text-white  pt-20 pb-15 text-center"
          style={{
            backgroundImage: `radial-gradient(rgba(20, 21, 51, 0.9), rgba(20, 21, 51, 0.5)), url(${background})`,
          }}
        >
          <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-xl md:text-3xl font-extrabold mb-4">Bienvenue chez Intelligencia</h1>
            <p>
              Découvrez nos formations linguistiques, notre accompagnement pour l'immigration, et notre préparation spécialisée aux examens internationaux.
            </p>
            <a
              href="/Formations"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white mt-5 font-semibold py-3 px-6 rounded-xl transition"
            >
              Découvrir nos formations
            </a>
          </div>

        </section>
        <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-white text-xl md:text-3xl  font-bold text-center mb-12 max-w-3xl mx-auto" data-aos="fade-up">
            Pourquoi choisir Intelligencia pour apprendre les langues ?
          </h1>

          <div className="container px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Immersion linguistique */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg " data-aos="fade-up" data-aos-delay="100" >
              <div className="flex items-start">
                <svg className="text-orange-400 w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zM7 10h10v2H7v-2zm2 4h6v2H9v-2z" />
                </svg>
                <div className="ml-4">
                  <h3 className="text-white text-lg font-semibold">Immersion linguistique complète</h3>
                  <p className="text-gray-300 mt-2">
                    Nos méthodes d’enseignement sont basées sur la pratique orale et l’écoute active, pour vous permettre de penser et parler directement dans la langue cible.
                  </p>
                </div>
              </div>
            </div>

            {/* Cours certifiés */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-start">
                <svg className="text-green-400 w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 3a2 2 0 0 0-2 2v14l7-3 7 3V5a2 2 0 0 0-2-2H5zm14 0h-2v18l2-1V3z" />
                </svg>
                <div className="ml-4">
                  <h3 className="text-white text-lg font-semibold">Cours certifiés et reconnus</h3>
                  <p className="text-gray-300 mt-2">
                    Obtenez des certifications officielles en anglais, français, allemand et plus encore. Valorisez votre profil académique ou professionnel à l’international.
                  </p>
                </div>
              </div>
            </div>

            {/* Suivi personnalisé */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-start">
                <svg className="text-yellow-400 w-12 h-12" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 0 8 8A8.01 8.01 0 0 0 8 0zm0 12.5A4.5 4.5 0 1 1 12.5 8 4.505 4.505 0 0 1 8 12.5z" />
                  <path d="M10.5 7H8V4.5a.5.5 0 0 0-1 0V8h3.5a.5.5 0 0 0 0-1z" />
                </svg>
                <div className="ml-4">
                  <h3 className="text-white text-lg font-semibold">Suivi personnalisé</h3>
                  <p className="text-gray-300 mt-2">
                    Nos formateurs qualifiés vous accompagnent individuellement selon votre niveau, vos objectifs et votre rythme d’apprentissage.
                  </p>
                </div>
              </div>
            </div>

            {/* Opportunités & carrière */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-start">
                <svg className="text-blue-400 w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4l1.4 1.4a10.45 10.45 0 0 0 2.5-6.8h-2zm-3.6 7.4-1.4-1.4a6.65 6.65 0 0 1-8.1 0l-1.4 1.4a8.94 8.94 0 0 0 10.9 0zM2 12a10.4 10.4 0 0 0 2.5 6.8l1.4-1.4A8.38 8.38 0 0 1 4 11.5H2zM6 4.5 4.6 3.1A10.4 10.4 0 0 0 2 10.5h2a8.4 8.4 0 0 1 2-6zm12 0a8.4 8.4 0 0 1 2 6h2a10.4 10.4 0 0 0-2.6-7.4L18 4.5zm-6 2A4 4 0 1 1 8 10.5 4 4 0 0 1 12 6.5z" />
                </svg>
                <div className="ml-4">
                  <h3 className="text-white text-lg font-extrabold">Langues et opportunités</h3>
                  <p className="text-gray-300 mt-2">
                    Maîtriser une langue vous ouvre des portes : études à l’étranger, emploi, voyages, et enrichissement culturel. Intelligencia vous guide vers ces opportunités.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <section className="py-20 px-6 bg-stone-500 text-center text-white">
          <h2 className="text-xl font-extrabold mb-6 ">Qui sommes-nous ?</h2>
          <p className="max-w-4xl mx-auto text-lg">
            Intelligencia est un centre de formation linguistique basé au Cameroun, spécialisé dans l’apprentissage de l’allemand et de l’italien.
            Nous préparons nos étudiants aux examens B1, B2 (Goethe, ÖSD, ECL...) et leur fournissons une assistance complète pour l’immigration vers l’Europe.
          </p>
        </section>



        <section className="py-20 px-6 bg-stone-300 ">
          <h2 className="text-3xl font-bold mb-10  text-center" data-aos="fade-up">Comment ça marche ?</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="shadow-lg rounded-lg p-4" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center justify-center font-bold mb-2 w-10 h-10 rounded-full bg-stone-200 ">1</div>
              <h4 className="font-semibold mb-1">Inscription</h4>
              <p className="text-sm text-gray-700">Choisissez une formation et inscrivez-vous en ligne ou au centre.</p>
            </div>
            <div className="shadow-lg rounded-lg p-4" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center justify-center font-bold mb-2 w-10 h-10 rounded-full bg-stone-200 ">2</div>
              <h4 className="font-semibold mb-1">Formation</h4>
              <p className="text-sm text-gray-700">Suivez nos cours intensifs en présentiel ou en ligne avec des supports modernes.</p>
            </div>
            <div className="shadow-lg rounded-lg p-4" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center justify-center font-bold mb-2 w-10 h-10 rounded-full bg-stone-200">3</div>
              <h4 className="font-semibold mb-1">Examen</h4>
              <p className="text-sm text-gray-700">Préparez-vous pour les examens certifiants reconnus à l’international.</p>
            </div>
            <div className="shadow-lg rounded-lg p-4" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center justify-center font-bold mb-2 w-10 h-10 rounded-full bg-stone-200 ">4</div>
              <h4 className="font-semibold mb-1">Accompagnement</h4>
              <p className="text-sm text-gray-700">Recevez un suivi pour les procédures de visa, inscription universitaire ou travail.</p>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-xl md:text-3xl font-bold text-gray-800" data-aos="fade-up">Ils ont réussi avec Intelligencia</h1>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Story 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="100">
                <div className="text-4xl text-indigo-600 mb-4">&#10077;</div>
                <p className="text-gray-700 mb-6">
                  Grâce à Intelligencia, j'ai pu obtenir mon certificat B2 et réussir mon projet d'immigration vers l'Allemagne !
                </p>
                <div className="flex items-center">
                  <div className="text-3xl">👨‍🎓</div>
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold text-gray-800">Jean Mbarga</h5>
                    <p className="text-sm text-gray-500">Étudiant en Allemagne</p>
                  </div>
                </div>
              </div>

              {/* Story 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
                <div className="text-4xl text-indigo-600 mb-4">&#10077;</div>
                <p className="text-gray-700 mb-6">
                  J'ai adoré la méthode d'enseignement. Aujourd'hui, je parle couramment l'italien et je travaille à Rome.
                </p>
                <div className="flex items-center">
                  <div className="text-3xl">👩‍🎓</div>
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold text-gray-800">Sophie Ngono</h5>
                    <p className="text-sm text-gray-500">Traductrice en Italie</p>
                  </div>
                </div>
              </div>

              {/* Story 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="300">
                <div className="text-4xl text-indigo-600 mb-4">&#10077;</div>
                <p className="text-gray-700 mb-6">
                  Intelligencia m’a guidé de l’apprentissage linguistique jusqu’à mon départ pour Berlin. Très satisfait !
                </p>
                <div className="flex items-center">
                  <div className="text-3xl">👨‍🎓</div>
                  <div className="ml-4">
                    <h5 className="text-lg font-semibold text-gray-800">Arnaud Tchatchoua</h5>
                    <p className="text-sm text-gray-500">Technicien à Berlin</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 to-indigo-900 text-white py-24 px-6 text-center">
          <h1 className="text-xl md:text-3xl font-bold mb-6">Parlez l’Allemand et l’Italien avec Confiance</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Rejoignez Intelligencia, le centre de formation en langues étrangères qui vous ouvre les portes de l’Europe.
          </p>
          <a href="/formations" className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
            Découvrir nos formations
          </a>
        </section>


        <section className="py-20 px-6 bg-gray-100 ">
          <h2 className="text-2xl font-bold mb-6  text-center">
            Notre Particularité : L’Excellence à Votre Portée
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold text-lg mb-2">Formateurs certifiés</h3>
              <p>
                Nos enseignants sont diplômés et expérimentés, avec une parfaite maîtrise des exigences des examens B1, B2.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold text-lg mb-2">Accompagnement immigration</h3>
              <p>
                Nous vous assistons dans la constitution de vos dossiers de voyage vers l'Allemagne ou l'Italie.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold text-lg mb-2">Taux de réussite élevé</h3>
              <p>
                90% de nos étudiants obtiennent leur certification et réussissent leur projet d’immigration.
              </p>
            </div>
          </div>
        </section>



        <section className="py-12 px-4 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-xl md:text-3xl  font-bold text-center mb-10">
              Nos Formations en Langues
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Carte Allemand */}
              <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition">
                <h2 className="text-lg font-semibold mb-4">🇩🇪 Cours d’Allemand</h2>
                <ul className="space-y-1">
                  <li>✅ Préparation : A1, A2, B1, B2</li>
                  <li>🕐 Cours du jour et du soir</li>
                  <li>📚 Pour études, travail, intégration</li>
                </ul>
              </div>

              {/* Carte Italien */}
              <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition">
                <h2 className="text-lg font-semibold mb-4">🇮🇹 Cours d’Italien</h2>
                <ul className="space-y-1">
                  <li>✅ Préparation : A1, A2, B1, B2</li>
                  <li>🕐 Cours du jour et du soir</li>
                  <li>📚 Pour études, voyages</li>
                  <li>🎓 Examens : CELI, CILS, PLIDA</li>
                </ul>
              </div>

              {/* Carte Anglais */}
              <div className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition">
                <h2 className="text-lg font-semibold mb-4">🇬🇧 Cours d’Anglais</h2>
                <ul className="space-y-1">
                  <li>✅ Préparation : A1, A2, B1, B2, C1</li>
                  <li>🕐 Cours du jour et du soir</li>
                  <li>📚 Pour études, travail, voyages</li>
                  <li>🎓 Examens : TOEFL, IELTS</li>
                </ul>
              </div>
            </div>
          </div>
        </section>


      </div>
    </section>
  );
}






























