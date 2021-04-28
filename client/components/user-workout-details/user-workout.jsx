import React from 'react';

export default class UserWorkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({ filler: 0 });
  }

  render() {
    const { workoutName, exerciseInfo } = this.props.info;
    return (
      <>
      <div className="user-workout-title">{workoutName}</div>
      {exerciseInfo.map(exercise => {
        return (
        <div key={exercise.exerciseNum} className="user-workout-container">
          <div className="exercise-item">
            <div className="exercise-item-title">{`Exercise ${exercise.exerciseNum}`}</div>
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
