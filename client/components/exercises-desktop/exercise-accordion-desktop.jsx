// import { json } from 'express';
import React from 'react';
import ExerciseInfoAccordion from './exercise-info-accordion-desktop';

export default class ExerciseAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exercises: [], currentExerciseID: null };
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

  saveExercise(event) {
    const exerciseId = parseInt(event.target.getAttribute('exerciseid'));
    const body = { userId: 1, exerciseId, username: 'GIGACHAD' };
    fetch('/api/saved-exercises', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      }).catch(err => console.error(err));
  }

  // you deleted the database you fuckin idiot.  fix it when you awaken

  render() {
    console.log(this.state.currentExerciseID);
    return (
      <>
        {this.state.currentExerciseID
          ? <ExerciseInfoAccordion exerciseid={this.state.currentExerciseID} />
          : this.state.exercises.map(exercise => (
            <a className='tile-container' onClick={this.decipherExerciseID} exerciseid={exercise.id} key={exercise.id}>
              <div className='bg-app-tile'></div>
              <div className="app-tile">
                <i exerciseid={exercise.id} onClick={this.saveExercise} className="far fa-bookmark unsaved-icon"></i>
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
