import React from 'react';
import CreateWorkoutForm from '../components/create-workout-form/create-workout';

export default function CreateWorkout(props) {
  return (
    <>
      <div className="current-page">CREATE WORKOUT</div>
      <main>
        <CreateWorkoutForm />
      </main>
    </>
  );
}
