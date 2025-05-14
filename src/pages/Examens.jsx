
import { useEffect } from "react";
import React from "react";
import ExamHero from "../components/ExamHero";
import ExamTypesSection from '../components/ExamTypesSection'
import PreparationProcess from '../components/PreparationProcess'
import ResourcesSection from '../components/ResourcesSection'
import ExamContact from '../components/ExamContact'

export default function ExamPreparation() {

      useEffect(() => {
        // Faire défiler vers le haut au chargement de la page
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="font-sans bg-gray-50">
      <ExamHero />
      <ExamTypesSection />
      <PreparationProcess />
      <ResourcesSection />
      <ExamContact />
    </div>
  )
}