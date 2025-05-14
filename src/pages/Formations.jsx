
import React from "react";
import { useEffect } from "react";
import education from '../assets/edu.jpg';
import background from '../assets/centre-pic4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 





export default function Formations() {
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
        className="relative bg-center bg-no-repeat bg-cover bg-fixed text-white pt-20 pb-20"
        style={{
          backgroundImage: `radial-gradient(rgba(20, 21, 51, 0.9), rgba(20, 21, 51, 0.5)), url(${background})`,
        }}
      >
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            Formez-vous dès aujourd’hui pour réussir à l’international
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Nos programmes linguistiques sont conçus pour vous préparer efficacement aux examens internationaux (Goethe, CELI, TOEFL, IELTS) et vous accompagner dans vos projets d’études ou de carrière à l’étranger.
          </p>
          <a
            href="/Contact"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black mt-5 font-semibold py-3 px-6 rounded-xl transition"
          >
            Explorer nos formations
          </a>
        </div>
      </section>
      <section className="pt-20 px-6 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Boostez vos compétences avec les bonnes stratégies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🎯</span>
                <h3 className="text-xl font-semibold">Fixez vos objectifs linguistiques</h3>
              </div>
              <p className="text-gray-600">
                Définir un but précis (examen, voyage, immigration) vous aide à rester motivé tout au long du parcours.
                Nos formateurs vous guident dans l’élaboration d’un plan personnalisé.
              </p>
            </div>

            {/* Article 2 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🕒</span>
                <h3 className="text-xl font-semibold">Optez pour un rythme adapté</h3>
              </div>
              <p className="text-gray-600">
                Cours du jour ou du soir, en semaine ou le week-end : trouvez la formule qui correspond à votre quotidien.
                La flexibilité est notre priorité.
              </p>
            </div>

            {/* Article 3 */}
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">📜</span>
                <h3 className="text-xl font-semibold">Préparez les examens avec succès</h3>
              </div>
              <p className="text-gray-600">
                Grâce à nos simulations, supports spécialisés et accompagnement intensif, vous maximisez vos chances de réussir
                le TOEFL, IELTS, Goethe ou CELI.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gray-50 text-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Présentation des formations */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
            🎓 Nos Formations en Présentiel & en Ligne
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Présentiel */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition" data-aos="zoom-in-left" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">🏫</span>
                <h3 className="text-xl font-bold">Cours en Présentiel</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Nos classes à effectif réduit vous garantissent un suivi personnalisé, une immersion linguistique efficace,
                et un encadrement de qualité dans nos locaux modernes.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Préparation aux examens : Goethe (🇩🇪), CELI / CILS / PLIDA (🇮🇹), IELTS & TOEFL (🇬🇧)</li>
                <li>Sessions intensives & régulières</li>
                <li>Formateurs certifiés et expérimentés</li>
              </ul>
            </div>

            {/* En ligne */}
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition" data-aos="zoom-in-right" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">💻</span>
                <h3 className="text-xl font-bold">Cours en Ligne</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Apprenez depuis chez vous avec des cours interactifs, des supports numériques, et un accompagnement vidéo en temps réel.
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600">
                <li>Accès aux replays et documents PDF</li>
                <li>Entraînements en ligne aux examens</li>
                <li>Flexibilité des horaires : soir, week-end, selon vos disponibilités</li>
              </ul>
            </div>
          </div>

          {/* Section Témoignages */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-8" data-aos="fade-up">🗣️ Ils ont suivi nos formations avec succès</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left" data-aos="fade-up" data-aos-delay="100">
              {/* Témoignage 1 */}
              <div className="bg-white p-6 rounded-xl shadow">
                <p className="text-sm italic mb-4">"Grâce à Intelligencia, j'ai obtenu mon certificat B2 en allemand en seulement 4 mois ! Les cours sont très bien structurés."</p>
                <div className="font-bold">🇩🇪 Marc, futur étudiant en Allemagne</div>
              </div>

              {/* Témoignage 2 */}
              <div className="bg-white p-6 rounded-xl shadow" data-aos="fade-up" data-aos-delay="200">
                <p className="text-sm italic mb-4">"Les cours en ligne sont super pratiques ! J’ai réussi mon CELI B2 et je prépare maintenant mon dossier pour l’Italie."</p>
                <div className="font-bold">🇮🇹 Aïcha, candidate à l’immigration</div>
              </div>

              {/* Témoignage 3 */}
              <div className="bg-white p-6 rounded-xl shadow" data-aos="fade-up" data-aos-delay="300">
                <p className="text-sm italic mb-4">"J’ai passé l’IELTS avec un excellent score. Merci aux enseignants qui m’ont accompagné du début à la fin."</p>
                <div className="font-bold">🇬🇧 Lionel, futur ingénieur au Canada</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative bg-center bg-no-repeat bg-cover bg-fixed text-white py-20 px-6 mb-0"
        style={{
          backgroundImage: `radial-gradient(rgba(20, 21, 51, 0.9), rgba(20, 21, 51, 0.5)), url(${education})`,
        }}
      >
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-6">
            📅 Planifiez votre consultation gratuite
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl">
            Vous avez des questions sur nos programmes de formation ? Vous souhaitez être guidé pour réussir vos examens internationaux (TOEFL, IELTS, DELF, CELI, etc.) ?
            Prenez un rendez-vous personnalisé avec l’un de nos conseillers dès maintenant !
          </p>
          <a
            href="https://wa.me/237694037085?text=Bonjour%20!%20Je%20souhaite%20planifier%20une%20consultation%20gratuite%20avec%20votre%20centre%20de%20formation%20pour%20m%27informer%20sur%20vos%20cours%20et%20les%20préparations%20aux%20examens.%20Merci%20de%20me%20recontacter%20!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            Planifiez votre consultation gratuite
          </a>
        </div>
      </section>
    </section>
  );
}