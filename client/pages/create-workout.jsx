import React from 'react';
import CreateWorkoutForm from '../components/create-workout-form/create-workout';

export default function SavedExercises(props) {
  return (
    <>
      <div className="current-page">CREATE WORKOUT</div>
      <main>
        <CreateWorkoutForm />
      </main>
    </>
  );
}
