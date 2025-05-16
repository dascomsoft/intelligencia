
import { useEffect } from "react";
import React from "react";
import goethe from '../assets/goethe1.png';
import test from '../assets/test.jpg';
import cil from '../assets/cil2.png';
import celi from '../assets/celi.jpg';
import ielts from '../assets/ielts.jpg';
import toefel from '../assets/toefel.png';
import ecl from '../assets/ECL.jpg';
import osd from '../assets/osd.jpg';

import cambridge from '../assets/cambridge.png';
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function ExamTypesSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const exams = [
    {
      language: "Allemand",
      exams: [
        {
          name: "Goethe-Zertifikat",
          levels: "A1-C2",
          description: "Examens officiels reconnus pour les études, le travail et l'immigration en Allemagne",
          duration: "4-12 semaines",
          image: goethe
        },
        {
          name: "TestDaF",
          levels: "B2-C1",
          description: "Examen pour l'accès aux universités allemandes",
          duration: "8-16 semaines",
          image: test
        },
        {
          name: "ECL",
          levels: "B2-C1",
          description: "Examen pour l'accès aux universités allemandes",
          duration: "3 Mois",
          image: ecl
        },
        {
          name: "OSD",
          levels: "B2-C1",
          description: "Examen pour l'accès aux universités allemandes ,le travail et l'immigration en Allemagne",
          duration: "3 Mois",
          image: osd
        },


        
      ]
    },
    {
      language: "Italien",
      exams: [
        {
          name: "CILS",
          levels: "A1-C2",
          description: "Certification officielle de l'Université de Sienne",
          duration: "6-14 semaines",
          image: cil
        },
        {
          name: "CELI",
          levels: "A1-C2",
          description: "Reconnu par le ministère italien des Affaires étrangères",
          duration: "6-12 semaines",
          image: celi
        }
      ]
    },
    {
      language: "Anglais",
      exams: [
        {
          name: "IELTS",
          levels: "A1-C2",
          description: "Reconnu mondialement pour les études et l'immigration",
          duration: "4-12 semaines",
          image: ielts
        },
        {
          name: "TOEFL",
          levels: "B1-C2",
          description: "Examen privilégié pour les universités américaines",
          duration: "6-12 semaines",
          image: toefel
        },
        {
          name: "Cambridge",
          levels: "A2-C2",
          description: "Certifications permanentes (FCE, CAE, CPE)",
          duration: "8-16 semaines",
          image: cambridge
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4 text-gray-800" data-aos='fade-up'>
          Nos Programmes de Préparation
        </h2>
        <p className="text-center mb-12 text-gray-600 max-w-3xl mx-auto" data-aos='fade-up'>
          Des formations ciblées pour chaque type d'examen
        </p>

        <div className="space-y-16" data-aos='fade-up'>
          {exams.map((languageGroup, index) => (
            <div key={index} className="border-b pb-12 last:border-b-0 last:pb-0">
              <h3 className="text-xl font-bold mb-8 text-blue-700 flex items-center">
                <span className=" w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                Examens d'{languageGroup.language}
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {languageGroup.exams.map((exam, examIndex) => (
                  <div key={examIndex} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={exam.image}
                        alt={exam.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-gray-800">{exam.name}</h4>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">
                          {exam.levels}
                        </span>
                        <span>{exam.duration} de préparation</span>
                      </div>
                      <p className="text-gray-600 my-4">{exam.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}