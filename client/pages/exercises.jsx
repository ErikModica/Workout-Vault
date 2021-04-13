import React from 'react';
import MuscleAccordion from '../components/exercises-mobile/muscle-accordion';
import MuscleAccordionDesktop from '../components/exercises-desktop/muscle-accordion-desktop';

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
