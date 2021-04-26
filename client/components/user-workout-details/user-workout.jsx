import React from 'react';

export default class UserWorkout extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({ filler: 0 });
  }

  render() {
    return (
      <div>USER WORKOUT INFORMATION</div>
    );
  }
}
