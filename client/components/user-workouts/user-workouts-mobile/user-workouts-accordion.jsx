import fetch from 'node-fetch';
import React from 'react';

export default class UserWorkoutsAccordion extends React.Component {

  componentDidMount() {
    fetch('/api/user-workouts')
      .then(result => result.json())
      .then(workouts => {
        console.log(workouts);
      });

  }

  render() {
    return (
      <div className="user-workouts-mobile">MOBILE ACCORDION OF WORKOUTS</div>
    );
  }
}
