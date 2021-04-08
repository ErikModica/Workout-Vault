import React from 'react';
import ExerciseAccordion from './exercise-accordion';

export default class MuscleAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { muscles: null, exercisesShown: false, exercises: null, currentMuscleID: null };
    this.showExercises = this.showExercises.bind(this);
  }

  componentDidMount() {
    fetch('/api/muscles')
      .then(result => result.json())
      .then(muscles => this.setState({
        muscles: muscles.map(muscle => {
          return <div onClick={this.showExercises} muscleid={muscle.id} key={muscle.id} className="muscle-group">{muscle.name}{this.exercisesShown ? <ExerciseAccordion /> : console.log('no no no')}</div>;
        })
      }));
  }

  showExercises(event) {
    const muscleID = event.target.getAttribute('muscleid');
    this.setState({ exercisesShown: true, currentMuscleID: muscleID });
  }

  render() {
    return (
      <div className="exercise-accordion">
        {this.state.muscles}
      </div>
    );
  }

}
