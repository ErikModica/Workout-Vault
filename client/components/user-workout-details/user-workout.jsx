import React from 'react';
import ExerciseModal from '../exercise-modal';

export default class UserWorkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = { modalShown: false, exerciseId: null };
    this.showExerciseInfo = this.showExerciseInfo.bind(this);
  }

  showExerciseInfo() {
    const exerciseId = event.target.getAttribute('exerciseid');
    this.setState({ modalShown: !this.state.modalShown, exerciseId });
  }

  render() {
    const { workoutName, exerciseInfo } = this.props.info;
    return (
      <>
      {this.state.modalShown ? <ExerciseModal exerciseid={this.state.exerciseId} hidemodal={this.showExerciseInfo} /> : ''}
      <div className="user-workout-title">{workoutName}</div>
      {exerciseInfo.map(exercise => {
        return (
        <div key={exercise.exerciseNum} className="user-workout-container">
          <div className="exercise-item">
            <div className="exercise-heading-group">
                <div className="exercise-item-title">{`Exercise ${exercise.exerciseNum}`}</div>
                <div className="exercise-details-button" onClick={this.showExerciseInfo} ><u exerciseid={exercise.id}>DETAILS</u></div>
            </div>
            <div className="exercise-item-details">
              <div className="exercise-item-exercise-group">
                <div className="exercise-item-subtitle">Exercise</div>
                <div>{exercise.name}</div>
              </div>
            </div>
          </div>
        </div>
        );
      })}
      </>
    );
  }
}
