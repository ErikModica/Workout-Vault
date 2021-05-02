import React from 'react';
import UserWorkoutsMobile from '../components/user-workouts/user-workouts-mobile/user-workouts-accordion';
import UserWorkoutsDesktop from '../components/user-workouts/user-workouts-desktop/user-workouts-app-drawer';

export default function UserWorkouts(props) {
  return (
    <>
      <div className="current-page">MY WORKOUTS</div>
      <main>
        <UserWorkoutsMobile />
        <UserWorkoutsDesktop />
      </main>
    </>
  );
}
