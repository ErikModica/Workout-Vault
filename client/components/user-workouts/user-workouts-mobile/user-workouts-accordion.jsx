import fetch from 'node-fetch';
import React from 'react';
import UserWorkout from '../../user-workout-details/user-workout';

export default class UserWorkoutsAccordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = { userWorkouts: [], activated: false, workoutInfo: {} };
    this.openWorkout = this.openWorkout.bind(this);
  }

  componentDidMount() {
    fetch('/api/user-workouts')
      .then(result => result.json())
      .then(workouts => {
        this.setState({ userWorkouts: workouts });
      });
  }

  openWorkout() {
    const workoutInfo = JSON.parse(event.target.getAttribute('info'));
    this.setState({ activated: true, workoutInfo });
  }

  render() {
    return (
      <>
      {!this.state.activated
        ? <div className="workout-list-container-mobile">
        {this.state.userWorkouts.map(workout => (
          <div key={workout.workoutId} className="workout-list-item">
            <a onClick={this.openWorkout} info={JSON.stringify(workout)} workoutid={workout.workoutId}>{workout.workoutName}</a>
          </div>
        ))
        }
      </div>
        : <UserWorkout info={this.state.workoutInfo}></UserWorkout>}
      </>
    );
  }
}
