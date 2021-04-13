import React from 'react';
import ExerciseInfoAccordion from './exercise-info-accordion-desktop';

export default class ExerciseAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exercises: [], currentExerciseID: null };
    this.decipherExerciseID = this.decipherExerciseID.bind(this);
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
        {this.state.currentExerciseID
          ? <ExerciseInfoAccordion exerciseid={this.state.currentExerciseID} />
          : this.state.exercises.map(exercise => (
            <a className='tile-container' onClick={this.decipherExerciseID} exerciseid={exercise.id} key={exercise.id}>
              <div className='bg-app-tile'></div>
              <div className="app-tile">
              <div className="tile-title" exerciseid={exercise.id}>
                  <h5>{exercise.name}</h5>
                </div>
              </div>
            </a>
          ))
        }
      </>
    );
  }

}
