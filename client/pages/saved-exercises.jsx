import React from 'react';
import SavedExercisesMobile from '../components/saved-exercises-mobile';
import SavedExercisesDesktop from '../components/saved-exercises-desktop';

export default function SavedExercises(props) {
  return (
    <>
      <div className="current-page">SAVED EXERCISES</div>
      <main>
        <SavedExercisesMobile />
        <SavedExercisesDesktop />
      </main>
    </>
  );
}
