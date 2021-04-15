import React from 'react';
import ExerciseAccordion from './exercise-accordion-desktop';

export default class MuscleAccordionDesktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { muscles: [], currentMuscleID: null };
    this.decipherMuscleID = this.decipherMuscleID.bind(this);
  }

  componentDidMount() {
    fetch('/api/muscles')
      .then(result => result.json())
      .then(muscles => {
        this.setState({ muscles });
      });
  }

  decipherMuscleID(event) {
    const muscleID = parseInt(event.target.getAttribute('muscleid'));
    if (muscleID === this.state.currentMuscleID) {
      this.setState({ currentMuscleID: null });
    } else {
      this.setState({ currentMuscleID: muscleID });
    }
  }

  render() {
    return (
      <div className="muscle-list-desktop">
        <div>
        {this.state.muscles.map(muscle => (
          <div key={muscle.id}>
            <a onClick={this.decipherMuscleID} key={muscle.id} muscleid={muscle.id}>{muscle.name}</a>
            <div className="exercise-tiles-container-desktop">
              {this.state.currentMuscleID === muscle.id ? <ExerciseAccordion muscleName={muscle.name} muscleID={this.state.currentMuscleID} /> : ''}
            </div>
          </div>
        ))
        }
        </div>
      </div>
    );
  }

}
