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
    this.checkSavedIcons();
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
    const body = { userId: 1, exerciseId, username: 'GIGACHAD', muscleId: this.props.muscleID, muscleName: this.props.muscleName };
    fetch('/api/saved-exercises', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      .then(res => res.json())
      .then(data => {
      })
      .catch(err => console.error(err));
    this.checkSavedIcons();
  }

  checkSavedIcons() {
    fetch('/api/saved-exercises')
      .then(res => res.json())
      .then(data => {
        this.setState({ savedIds: data });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <>
        {this.state.exercises.map(exercise => (
          <div key={exercise.id}>
            <a key={exercise.id} className="exercise">
              <div onClick={this.decipherExerciseID} exerciseid={exercise.id}>{exercise.name}</div>
              <i exerciseid={exercise.id} onClick={this.saveExercise}
                className={!this.state.savedIds[this.props.muscleName].includes(exercise.id) ? 'far fa-bookmark unsaved-icon' : 'fas fa-bookmark unsaved-icon'}>
              </i>
            </a>
            { this.state.currentExerciseID === exercise.id ? <ExerciseInfoAccordion exerciseid={exercise.id} /> : '' }
          </div>
        ))
        }
      </>
    );
  }

}
