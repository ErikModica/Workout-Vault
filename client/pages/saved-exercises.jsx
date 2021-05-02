import React from 'react';
import SavedExercisesMobile from '../components/saved-exercises/saved-exercises-mobile/muscle-list';
import SavedExercisesDesktop from '../components/saved-exercises/saved-exercises-desktop/muscle-list';

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
