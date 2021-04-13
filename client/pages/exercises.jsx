import React from 'react';
import MuscleAccordion from '../components/muscle-accordion';
import MuscleAccordionDesktop from '../components/accordion-desktop/muscle-accordion-desktop';

export default function Exercises(props) {
  return (
    <>
      <div className="current-page">EXERCISES</div>
      <main>
        <MuscleAccordion />
        <MuscleAccordionDesktop />
      </main>
    </>
  );
}
