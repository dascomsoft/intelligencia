// import { useState, useEffect, useRef } from 'react';
// import React from 'react';

// const IntelliBot = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [hasWelcomed, setHasWelcomed] = useState(false);
//     const [messages, setMessages] = useState([]);
//     const [inputValue, setInputValue] = useState('');
//     const messagesEndRef = useRef(null);

//     // Base de connaissances avec questions/réponses préconfigurées
//     const knowledgeBase = {
//         greetings: [
//             "Bonjour! 👋 Je suis IntelliBot, l'assistant virtuel d'Intelligencia. Comment puis-je vous aider aujourd'hui?",
//             "Salut! 😊 Prêt à découvrir nos formations linguistiques? Posez-moi vos questions!",
//             "Bienvenue chez Intelligencia! 🎓 Je peux vous renseigner sur nos cours, l'immigration et les examens."
//         ],
//         formations: {
//             types: "Nous proposons des formations en:\n\n🇩🇪 Allemand (A1-B2)\n🇮🇹 Italien (A1-B2)\n🇬🇧 Anglais (A1-C1)\n\nAvec préparation aux examens internationaux reconnus.",
//             methodes: "Nos méthodes d'enseignement:\n\n• Immersion linguistique complète\n• Pratique orale intensive\n• Suivi personnalisé\n• Formateurs certifiés\n• Supports pédagogiques modernes",
//             duree: "Durée des formations:\n\n• Niveau A1: 3 mois\n• Niveau A2: 3 mois\n• Niveau B1: 4 mois\n• Niveau B2: 5 mois\n\nCours disponibles en journée ou en soirée.",
//             prix: "Pour connaître nos tarifs précis, merci de nous contacter directement:\n\n📧 intelligenciacenter@gmail.com\n\nNous proposons aussi des facilités de paiement."
//         },
//         immigration: {
//             allemagne: "Immigration en Allemagne:\n\n• Préparation linguistique (niveaux B1/B2)\n• Constitution des dossiers\n• Procédures de visa\n• Recherche de logement\n• Intégration culturelle\n\nTaux de réussite: 90%",
//             italie: "Immigration en Italie:\n\n• Préparation aux examens CELI/CILS/PLIDA\n• Inscriptions universitaires\n• Démarchage professionnel\n• Procédures administratives\n\nNous accompagnons jusqu'à votre installation.",
//             general: "Nos services d'immigration:\n\n1. Évaluation de profil\n2. Plan personnalisé\n3. Préparation linguistique\n4. Constitution du dossier\n5. Suivi jusqu'au départ\n\nPays cibles: Allemagne, Italie, Autriche"
//         },
//         examens: {
//             types: "Examens préparés:\n\n🇩🇪 Allemand:\n• Goethe-Zertifikat\n• ÖSD\n• ECL\n\n🇮🇹 Italien:\n• CELI\n• CILS\n• PLIDA\n\n🇬🇧 Anglais:\n• IELTS\n• TOEFL\n• Cambridge English",
//             dates: "Les sessions d'examens ont lieu plusieurs fois par an. Prochaines dates disponibles:\n\n• Goethe B1: 15/10/2024\n• CELI B2: 22/11/2024\n• IELTS: 05/12/2024\n\nContactez-nous pour plus de dates.",
//             preparation: "Notre préparation comprend:\n\n• Tests blancs réguliers\n• Simulations d'entretien\n• Techniques de gestion du temps\n• Révision des points clés\n• Support jusqu'au jour J"
//         },
//         contact: {
//             adresse: "📍 Adresse:\nCentre Intelligencia\nYaoundé, Cameroun\n\n📧 Email:\nintelligenciacenter@gmail.com",
//             heures: "⏰ Horaires d'ouverture:\n\nLundi-Vendredi: 8h-18h\nSamedi: 9h-13h\n\n📞 Contact téléphonique disponible pendant ces horaires."
//         },
//         about: "Intelligencia est un centre d'excellence en formation linguistique spécialisé dans:\n\n• L'enseignement de l'allemand et l'italien\n• La préparation aux examens B1/B2\n• L'accompagnement pour l'immigration européenne\n\nNotre particularité: un suivi personnalisé jusqu'à la réussite!",
//         default: "Je n'ai pas bien compris votre demande. Voici ce que je peux vous expliquer:\n\n1️⃣ Nos formations linguistiques\n2️⃣ L'immigration en Europe\n3️⃣ La préparation aux examens\n4️⃣ Nos coordonnées\n\nPosez-moi une question précise!"
//     };

//     // Détecter l'intention et répondre automatiquement
//     const getAutoResponse = (message) => {
//         const lowerMsg = message.toLowerCase();

//         // Salutations
//         if (/bonjour|salut|hello|hi|coucou|hey/.test(lowerMsg)) {
//             return knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
//         }

//         // Formations
//         if (/formation|cours|apprendre|étudier|enseignez|langue/.test(lowerMsg)) {
//             if (/allemand|deutsch|german/.test(lowerMsg)) return "🇩🇪 Allemand:\n" + knowledgeBase.formations.types + "\n\n" + knowledgeBase.formations.methodes;
//             if (/italien|italiano|italian/.test(lowerMsg)) return "🇮🇹 Italien:\n" + knowledgeBase.formations.types + "\n\n" + knowledgeBase.formations.methodes;
//             if (/anglais|english|inglés/.test(lowerMsg)) return "🇬🇧 Anglais:\n" + knowledgeBase.formations.types + "\n\n" + knowledgeBase.formations.methodes;
//             if (/durée|temps|mois|année|combien de temps/.test(lowerMsg)) return knowledgeBase.formations.duree;
//             if (/prix|coût|tarif|cout|combien ça coûte/.test(lowerMsg)) return knowledgeBase.formations.prix;
//             return "Nos formations:\n" + knowledgeBase.formations.types + "\n\n" + knowledgeBase.formations.methodes;
//         }

//         // Immigration
//         if (/immigration|allemagne|italie|europe|visa|partir|déménager|vivre à l'étranger/.test(lowerMsg)) {
//             if (/allemagne|germany|deutschland/.test(lowerMsg)) return knowledgeBase.immigration.allemagne;
//             if (/italie|italy|italia/.test(lowerMsg)) return knowledgeBase.immigration.italie;
//             if (/taux|réussite|statistique|chance/.test(lowerMsg)) return "Nos taux de réussite:\n\n" + knowledgeBase.immigration.allemagne.split('\n\n').pop();
//             return "Immigration:\n" + knowledgeBase.immigration.general;
//         }

//         // Examens
//         if (/examen|test|certificat|goethe|celi|toefl|ielts|cambridge|diplôme/.test(lowerMsg)) {
//             if (/date|quand|session|inscription/.test(lowerMsg)) return knowledgeBase.examens.dates;
//             if (/préparer|préparation|entrainement/.test(lowerMsg)) return knowledgeBase.examens.preparation;
//             return "Examens préparés:\n" + knowledgeBase.examens.types;
//         }

//         // Contact
//         if (/contact|adresse|email|mail|téléphone|appeler|visiter|où êtes-vous/.test(lowerMsg)) {
//             return knowledgeBase.contact.adresse + "\n\n" + knowledgeBase.contact.heures;
//         }

//         // À propos
//         if (/qui êtes-vous|à propos|intelligencia|mission|valeurs/.test(lowerMsg)) {
//             return knowledgeBase.about;
//         }

//         // Par défaut
//         return knowledgeBase.default;
//     };

//     // Envoyer un message
//     const handleSendMessage = () => {
//         if (inputValue.trim() === '') return;

//         // Ajouter le message utilisateur
//         const userMessage = { text: inputValue, sender: 'user' };
//         setMessages(prev => [...prev, userMessage]);
//         setInputValue('');

//         // Réponse automatique après un délai
//         setTimeout(() => {
//             const botResponse = { text: getAutoResponse(inputValue), sender: 'bot' };
//             setMessages(prev => [...prev, botResponse]);
//         }, 800);
//     };

//     // Message de bienvenue au premier chargement
//     useEffect(() => {
//         if (!hasWelcomed && isOpen) {
//             const welcomeMessage = {
//                 text: knowledgeBase.greetings[0],
//                 sender: 'bot'
//             };
//             setMessages([welcomeMessage]);
//             setHasWelcomed(true);
//         }
//     }, [isOpen]);

//     // Auto-scroll vers les nouveaux messages
//     useEffect(() => {
//         messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//     }, [messages]);

//     return (
//         <div className="fixed bottom-6 right-6 z-50">
//             {/* Bouton flottant */}
//             <button
//                 onClick={() => setIsOpen(true)}
//                 className={`p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all ${isOpen ? 'hidden' : 'animate-bounce'}`}
//                 aria-label="Ouvrir le chat"
//             >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//                 </svg>
//             </button>

//             {/* Popup du chatbot */}
//             {isOpen && (
//                 <div className="w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col border border-blue-200 transform transition-all">
//                     {/* Header */}
//                     <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
//                         <div className="flex items-center">
//                             <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//                             </svg>
//                             <h3 className="font-bold">Assistant Intelligencia</h3>
//                         </div>
//                         <button
//                             onClick={() => setIsOpen(false)}
//                             className="text-white hover:text-blue-200 focus:outline-none"
//                         >
//                             ×
//                         </button>
//                     </div>

//                     {/* Zone de messages */}
//                     <div className="flex-1 p-3 overflow-y-auto">
//                         {messages.length === 0 ? (
//                             <div className="text-center text-gray-500 mt-10">
//                                 Posez-moi vos questions sur nos formations!
//                             </div>
//                         ) : (
//                             messages.map((msg, index) => (
//                                 <div
//                                     key={index}
//                                     className={`mb-3 p-3 rounded-lg max-w-xs ${msg.sender === 'user'
//                                         ? 'bg-blue-100 ml-auto text-right'
//                                         : 'bg-gray-100 mr-auto text-left'}`}
//                                 >
//                                     {msg.text.split('\n').map((line, i) => (
//                                         <p key={i} className="whitespace-pre-line">{line}</p>
//                                     ))}
//                                 </div>
//                             ))
//                         )}
//                         <div ref={messagesEndRef} />
//                     </div>

//                     {/* Zone de saisie */}

//                     <div className="p-3 border-t border-gray-200 bg-gray-50 rounded-b-lg w-full">
//                         <div className="flex w-full overflow-hidden">
//                             <input
//                                 type="text"
//                                 value={inputValue}
//                                 onChange={(e) => setInputValue(e.target.value)}
//                                 onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//                                 placeholder="Tapez votre message..."
//                                 className="flex-grow border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-0"
//                             />
//                             <button
//                                 onClick={handleSendMessage}
//                                 className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none disabled:opacity-50"
//                                 disabled={!inputValue.trim()}
//                             >
//                                 Envoyer
//                             </button>
//                         </div>
//                         <p className="text-xs text-gray-500 mt-2 text-center">
//                             Posez-moi des questions sur nos formations, examens ou l'immigration
//                         </p>
//                     </div>

//                 </div>
//             )}
//         </div>
//     );
// };

// export default IntelliBot;














import { useState, useEffect, useRef } from 'react';
import React from 'react';

const IntelliBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasWelcomed, setHasWelcomed] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    // Base de connaissances avec questions/réponses préconfigurées
    const knowledgeBase = {
        greetings: [
            "Bonjour! 👋 Je suis IntelliBot, l'assistant virtuel d'Intelligencia. Comment puis-je vous aider aujourd'hui?",
            "Salut! 😊 Prêt à découvrir nos formations linguistiques? Posez-moi vos questions!",
            "Bienvenue chez Intelligencia! 🎓 Je peux vous renseigner sur nos cours, l'immigration et les examens."
        ],
        formations: {
            types: "Nous proposons des formations en:\n\n🇩🇪 Allemand (A1-B2)\n🇮🇹 Italien (A1-B2)\n🇬🇧 Anglais (A1-C1)\n\nAvec préparation aux examens internationaux reconnus.",
            methodes: "Nos méthodes d'enseignement:\n\n• Immersion linguistique complète\n• Pratique orale intensive\n• Suivi personnalisé\n• Formateurs certifiés\n• Supports pédagogiques modernes",
            duree: "Durée des formations:\n\n• Niveau A1: 3 mois\n• Niveau A2: 3 mois\n• Niveau B1: 4 mois\n• Niveau B2: 5 mois\n\nCours disponibles en journée ou en soirée.",
            prix: "Pour connaître nos tarifs précis, merci de nous contacter directement:\n\n📧 intelligenciacenter@gmail.com\n\nNous proposons aussi des facilités de paiement."
        },
        immigration: {
            allemagne: "Immigration en Allemagne:\n\n• Préparation linguistique (niveaux B1/B2)\n• Constitution des dossiers\n• Procédures de visa\n• Recherche de logement\n• Intégration culturelle\n\nTaux de réussite: 90%",
            italie: "Immigration en Italie:\n\n• Préparation aux examens CELI/CILS/PLIDA\n• Inscriptions universitaires\n• Démarchage professionnel\n• Procédures administratives\n\nNous accompagnons jusqu'à votre installation.",
            general: "Nos services d'immigration:\n\n1. Évaluation de profil\n2. Plan personnalisé\n3. Préparation linguistique\n4. Constitution du dossier\n5. Suivi jusqu'au départ\n\nPays cibles: Allemagne, Italie, Autriche"
        },
        examens: {
            types: "Examens préparés:\n\n🇩🇪 Allemand:\n• Goethe-Zertifikat\n• ÖSD\n• ECL\n\n🇮🇹 Italien:\n• CELI\n• CILS\n• PLIDA\n\n🇬🇧 Anglais:\n• IELTS\n• TOEFL\n• Cambridge English",
            dates: "Les sessions d'examens ont lieu plusieurs fois par an. Prochaines dates disponibles:\n\n• Goethe B1: 15/10/2024\n• CELI B2: 22/11/2024\n• IELTS: 05/12/2024\n\nContactez-nous pour plus de dates.",
            preparation: "Notre préparation comprend:\n\n• Tests blancs réguliers\n• Simulations d'entretien\n• Techniques de gestion du temps\n• Révision des points clés\n• Support jusqu'au jour J"
        },
        contact: {
            adresse: "📍 Adresse:\nCentre Intelligencia\nYaoundé, Cameroun\n\n📧 Email:\nintelligenciacenter@gmail.com",
            heures: "⏰ Horaires d'ouverture:\n\nLundi-Vendredi: 8h-18h\nSamedi: 9h-13h\n\n📞 Contact téléphonique disponible pendant ces horaires."
        },
        divers: {
            // mobileMoney: "Nous acceptons les paiements par Mobile Money:\n\n• MTN Mobile Money\n• Orange Money\n\nEnvoyez-nous un screenshot après paiement au 655 555 555",
            examensLocaux: "Pour les examens locaux (Probatoire, BAC, CAPIEMP):\n\nNous proposons des cours de remise à niveau en:\n• Français\n• Anglais\n• Culture générale\n\nDurée: 1 à 2 mois intensifs",
            astuces: "Astuces pour réussir:\n\n1️⃣ Éviter le 'mbenguisme' en Allemagne\n2️⃣ Bien préparer son retour au pays\n3️⃣ Gérer le choc culturel\n4️⃣ Apprendre les bases avant le départ",
            humour: "😄 Saviez-vous que?\n\n• 'Faire allemand' ≠ parler couramment\n• 'Déposer le dossier' est un sport national\n• Le vrai B1 commence au marché de Douala!\n\nBlague à part, nous sommes sérieux!",
            horsSujet: "Je suis spécialisé dans les formations et l'immigration, mais voici quelques infos:\n\n• Heure locale: " + new Date().toLocaleTimeString('fr-CM') + "\n• Devise: FCFA\n• Code pays: +237\n\nPosez-moi une question utile!",
            urgence: "⚠ En cas d'urgence grave:\n\nContactez la gendarmerie:\n🚓 117\n\nOu les pompiers:\n🚒 118\n\nNous ne sommes pas un service d'urgence!"
        },
        about: "Intelligencia est un centre d'excellence en formation linguistique spécialisé dans:\n\n• L'enseignement de l'allemand et l'italien\n• La préparation aux examens B1/B2\n• L'accompagnement pour l'immigration européenne\n\nNotre particularité: un suivi personnalisé jusqu'à la réussite!",
        default: "Je n'ai pas bien compris. Voici ce que je peux expliquer:\n\n1️⃣ Formations linguistiques\n2️⃣ Immigration européenne\n3️⃣ Examens internationaux\n4️⃣ Contacts\n5️⃣ Questions pratiques\n6️⃣ Discussions informelles\n\nChoisissez un numéro ou posez votre question!"
    };

    // Détecter l'intention et répondre automatiquement
    const getAutoResponse = (message) => {
        const lowerMsg = message.toLowerCase();

        // Salutations
        if (/bonjour|salut|hello|hi|coucou|hey|bjr|slt/.test(lowerMsg)) {
            return knowledgeBase.greetings[Math.floor(Math.random() * knowledgeBase.greetings.length)];
        }

        // Questions pratiques locales
        if (/(mobile money|orange money|om|mtn)/.test(lowerMsg)) return knowledgeBase.divers.mobileMoney;
        if (/(probatoire|bac|cap)/.test(lowerMsg)) return knowledgeBase.divers.examensLocaux;
        if (/astuce|conseil|mbenguisme|choc culturel/.test(lowerMsg)) return knowledgeBase.divers.astuces;
        if (/blague|humour|meme|😂|😅/.test(lowerMsg)) return knowledgeBase.divers.humour;
        if (/(urgence|danger|blessé|hôpital)/.test(lowerMsg)) return knowledgeBase.divers.urgence;
        if (/(foot|football|match|lion|fécafoot)/.test(lowerMsg)) return "⚽ Le football c'est bien, mais l'allemand c'est mieux!\n\nConcentrez-vous sur vos études d'abord! 😉";
        if (/(mariage|femme|épouse)/.test(lowerMsg)) return "💍 Nous ne faisons pas de mariage arrangé, mais nous pouvons vous préparer à:\n• Les entretiens de visa familial\n• Le regroupement familial\n• L'intégration conjugale à l'étranger";

        // Formations
        if (/formation|cours|apprendre|étudier|enseignez|langue/.test(lowerMsg)) {
            if (/allemand|deutsch|german/.test(lowerMsg)) return "🇩🇪 Allemand:\n" + knowledgeBase.formations.types + "\n\n" + knowledgeBase.formations.methodes;
            if (/italien|italiano|italian/.test(lowerMsg)) return "🇮🇹 Italien:\n" + knowledgeBase.formations.types + "\n\n" + knowledgeBase.formations.methodes;
            if (/anglais|english|inglés/.test(lowerMsg)) return "🇬🇧 Anglais:\n" + knowledgeBase.formations.types + "\n\n" + knowledgeBase.formations.methodes;
            if (/durée|temps|mois|année|combien de temps/.test(lowerMsg)) return knowledgeBase.formations.duree;
            if (/prix|coût|tarif|cout|combien ça coûte/.test(lowerMsg)) return knowledgeBase.formations.prix;
            return "Nos formations:\n" + knowledgeBase.formations.types + "\n\n" + knowledgeBase.formations.methodes;
        }

        // Immigration
        if (/immigration|allemagne|italie|europe|visa|partir|déménager|vivre à l'étranger/.test(lowerMsg)) {
            if (/allemagne|germany|deutschland/.test(lowerMsg)) return knowledgeBase.immigration.allemagne;
            if (/italie|italy|italia/.test(lowerMsg)) return knowledgeBase.immigration.italie;
            if (/taux|réussite|statistique|chance/.test(lowerMsg)) return "Nos taux de réussite:\n\n" + knowledgeBase.immigration.allemagne.split('\n\n').pop();
            return "Immigration:\n" + knowledgeBase.immigration.general;
        }

        // Examens
        if (/examen|test|certificat|goethe|celi|toefl|ielts|cambridge|diplôme/.test(lowerMsg)) {
            if (/date|quand|session|inscription/.test(lowerMsg)) return knowledgeBase.examens.dates;
            if (/préparer|préparation|entrainement/.test(lowerMsg)) return knowledgeBase.examens.preparation;
            return "Examens préparés:\n" + knowledgeBase.examens.types;
        }

        // Contact
        if (/contact|adresse|email|mail|téléphone|appeler|visiter|où êtes-vous/.test(lowerMsg)) {
            return knowledgeBase.contact.adresse + "\n\n" + knowledgeBase.contact.heures;
        }

        // Réponses hors contexte
        if (/(météo|pluie|soleil)/.test(lowerMsg)) return knowledgeBase.divers.horsSujet;
        if (/(amour|couple|relation)/.test(lowerMsg)) return "❤️ Nous ne sommes pas agence matrimoniale, mais nous pouvons:\n• Préparer aux entretiens familiaux\n• Enseigner le vocabulaire relationnel\n• Expliquer les droits familiaux en Europe";
        if (/(resto|njanga|soirée)/.test(lowerMsg)) return "🎉 Concentrez-vous sur vos études! Les célébrations viendront après la réussite 😊";

        // À propos
        if (/qui êtes-vous|à propos|intelligencia|mission|valeurs/.test(lowerMsg)) {
            return knowledgeBase.about;
        }

        // Par défaut
        return knowledgeBase.default;
    };

    // Envoyer un message
    const handleSendMessage = () => {
        if (inputValue.trim() === '') return;

        // Ajouter le message utilisateur
        const userMessage = { text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        // Réponse automatique après un délai
        setTimeout(() => {
            const botResponse = { text: getAutoResponse(inputValue), sender: 'bot' };
            setMessages(prev => [...prev, botResponse]);
        }, 800);
    };

    // Message de bienvenue au premier chargement
    useEffect(() => {
        if (!hasWelcomed && isOpen) {
            const welcomeMessage = {
                text: knowledgeBase.greetings[0],
                sender: 'bot'
            };
            setMessages([welcomeMessage]);
            setHasWelcomed(true);
        }
    }, [isOpen]);

    // Auto-scroll vers les nouveaux messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Bouton flottant */}
            <button
                onClick={() => setIsOpen(true)}
                className={`p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all ${isOpen ? 'hidden' : 'animate-bounce'}`}
                aria-label="Ouvrir le chat"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            </button>

            {/* Popup du chatbot */}
            {isOpen && (
                <div className="w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col border border-blue-200 transform transition-all">
                    {/* Header */}
                    <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
                        <div className="flex items-center">
                            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <h3 className="font-bold">Assistant Intelligencia</h3>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:text-blue-200 focus:outline-none"
                        >
                            ×
                        </button>
                    </div>

                    {/* Zone de messages */}
                    <div className="flex-1 p-3 overflow-y-auto">
                        {messages.length === 0 ? (
                            <div className="text-center text-gray-500 mt-10">
                                Posez-moi vos questions sur nos formations!
                            </div>
                        ) : (
                            messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`mb-3 p-3 rounded-lg max-w-xs ${msg.sender === 'user'
                                        ? 'bg-blue-100 ml-auto text-right'
                                        : 'bg-gray-100 mr-auto text-left'}`}
                                >
                                    {msg.text.split('\n').map((line, i) => (
                                        <p key={i} className="whitespace-pre-line">{line}</p>
                                    ))}
                                </div>
                            ))
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Zone de saisie */}
                    <div className="p-3 border-t border-gray-200 bg-gray-50 rounded-b-lg w-full">
                        <div className="flex w-full overflow-hidden">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Tapez votre message..."
                                className="flex-grow border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-0"
                            />
                            <button
                                onClick={handleSendMessage}
                                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none disabled:opacity-50"
                                disabled={!inputValue.trim()}
                            >
                                Envoyer
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2 text-center">
                            Posez-moi des questions sur nos formations, examens ou l'immigration
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IntelliBot;