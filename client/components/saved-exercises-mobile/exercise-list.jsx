import React from 'react';
import ExerciseInfo from './exercise-info';

export default class MuscleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { savedExercises: [], currentExerciseID: null };
    this.showExerciseInfo = this.showExerciseInfo.bind(this);
  }

  componentDidMount() {
    const muscleName = this.props.musclename;
    fetch(`/api/saved-exercises/${muscleName}`)
      .then(result => result.json())
      .then(savedExercises => this.setState({ savedExercises }));
  }

  showExerciseInfo(event) {
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
        {this.state.savedExercises.map(exercise => (
          <div key={exercise.exerciseId}>
            <a key={exercise.exerciseId} className="exercise">
              <div onClick={this.showExerciseInfo} exerciseid={exercise.exerciseId}>{exercise.exerciseName}</div>
            </a>
            { this.state.currentExerciseID === exercise.exerciseId ? <ExerciseInfo exerciseid={exercise.exerciseId} /> : ''}
          </div>
        ))
        }
      </>
    );
  }
}
