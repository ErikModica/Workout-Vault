import React from 'react';
import UserWorkout from '../../user-workout-details/user-workout';

export default class UserWorkoutsAppDrawer extends React.Component {

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
        ? <div className="app-drawer user-workouts-desktop">
        {this.state.userWorkouts.map(workout => (
            <a className='tile-container' key={workout.workoutId}>
              <div className='bg-app-tile'></div>
              <div className="app-tile">
                <div className="tile-title">
                <h5 onClick={this.openWorkout} info={JSON.stringify(workout)} exerciseid={workout.workoutId}>{workout.workoutName}</h5>
                </div>
              </div>
            </a>
        ))
        }
      </div>
        : <UserWorkout info={this.state.workoutInfo}></UserWorkout>}
    </>
    );
  }
}
