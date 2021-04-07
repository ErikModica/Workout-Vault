import React from 'react';

const muscleList = ['Abs', 'Biceps', 'Calves', 'Forearms', 'Glutes', 'Hamstrings', 'Lats', 'Lowerback', 'Midback', 'Quads', 'Shoulders', 'Traps', 'Triceps'];
const mappedMuscleList = muscleList.map(muscle => {
  return (
  <div className="muscle-group">
    <div>{muscle}</div>
  </div>
  )
})

export default function Exercises(props) {
  return (
    <>
      <div className="current-page">EXERCISES</div>
      <main>
        <div className="exercise-accordion">
          {mappedMuscleList}
        </div>
      </main>
    </>
  );
}
