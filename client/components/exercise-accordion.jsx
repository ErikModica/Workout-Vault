import React from 'react';

export default class ExerciseAccordion extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { exercisesShown: false };
  // }

  showExercises() {
    // const muscleID = event.target.getAttribute('muscleid');
    // console.log(muscleID);
    fetch(`/api/exercises-by-muscle/${this.state.currentMuscleID}`)
      .then(result => result.json())
      .then(exercises => this.setState({
        exercises: exercises.map(exercise => {
          return <div key={exercise.id} className="exercise-details">{exercise.name}</div>;
        })
      }));
  }

  render() {
    console.log(this.state.exercises);
    return (
      <div className="exercise-accordion">{this.state.exercises}</div>
    );
  }

}
