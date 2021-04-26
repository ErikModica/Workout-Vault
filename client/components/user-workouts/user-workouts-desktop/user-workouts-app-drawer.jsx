import React from 'react';

export default class UserWorkoutsAppDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { userWorkouts: [] };
  }

  componentDidMount() {
    fetch('/api/user-workouts')
      .then(result => result.json())
      .then(workouts => {
        this.setState({ userWorkouts: workouts });
      });
  }

  render() {
    return (
      <div className="app-drawer user-workouts-desktop">
        {this.state.userWorkouts.map(workout => (
            <a href="#user-workout" className='tile-container' info={workout} key={workout.workoutId}>
              <div className='bg-app-tile'></div>
              <div className="app-tile">
                <div className="tile-title">
                  <h5 exerciseid={workout.workoutId}>{workout.workoutName}</h5>
                </div>
              </div>
            </a>
        ))
        }
      </div>
    );
  }
}
