import React from 'react';
import ExerciseInfoAccordion from './exercise-info-accordion';

export default class ExerciseAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exercises: [], currentExerciseID: null, savedIds: {} };
    this.decipherExerciseID = this.decipherExerciseID.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
  }

  componentDidMount() {
    const muscleID = this.props.muscleID;
    fetch(`/api/exercises-by-muscle/${muscleID}`)
      .then(result => result.json())
      .then(exercises => this.setState({ exercises }));
  }

  decipherExerciseID(event) {
    const exerciseID = parseInt(event.target.getAttribute('exerciseid'));
    if (exerciseID === this.state.currentExerciseID) {
      this.setState({ currentExerciseID: null });
    } else {
      this.setState({ currentExerciseID: exerciseID });
    }
  }

  render() {
    return (
      <>
        {this.state.exercises.map(exercise => (
          <div key={exercise.id}>
            <a onClick={this.decipherExerciseID} exerciseid={exercise.id} key={exercise.id} className="exercise">
              {exercise.name}
            </a>
            { this.state.currentExerciseID === exercise.id ? <ExerciseInfoAccordion exerciseid={exercise.id} /> : ''}
          </div>
        ))
        }
      </>
    );
  }

}
