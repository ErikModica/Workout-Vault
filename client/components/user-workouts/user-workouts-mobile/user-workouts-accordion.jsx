import fetch from 'node-fetch';
import React from 'react';

export default class UserWorkoutsAccordion extends React.Component {

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
      <div className="workout-list-container-mobile">
        {this.state.userWorkouts.map(workout => (
          <div key={workout.workoutId} className="workout-list-item">
            <a workoutid={workout.workoutId}>{workout.workoutName}</a>
          </div>
        ))
        }
      </div>
    );
  }
}
