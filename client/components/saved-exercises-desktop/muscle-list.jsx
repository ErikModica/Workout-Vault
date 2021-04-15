import React from 'react';

export default class SavedExercisesDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { muscles: [] };
  }

  componentDidMount() {
    fetch('/api/muscles')
      .then(result => result.json())
      .then(muscles => {
        this.setState({ muscles });
      });
  }

  render() {
    return (
      <div className="muscle-list-desktop">
        <div>
          {this.state.muscles.map(muscle => (
            <div key={muscle.id}>
              <a onClick={this.decipherMuscleID} key={muscle.id} muscleid={muscle.id}>{muscle.name}</a>
              <div className="exercise-tiles-container-desktop">
              </div>
            </div>
          ))
          }
        </div>
      </div>
    );
  }

}
