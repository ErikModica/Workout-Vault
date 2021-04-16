import React from 'react';
import ExerciseList from './exercise-list';

export default class SavedExercisesMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { savedMuscles: [], currentMuscleName: null };
    this.showExercises = this.showExercises.bind(this);
  }

  componentDidMount() {
    fetch('/api/saved-exercises/muscles')
      .then(res => res.json())
      .then(data => {
        this.setState({ savedMuscles: data });
      });
  }

  showExercises(event) {
    const muscleName = event.target.getAttribute('musclename');
    if (muscleName === this.state.currentMuscleName) {
      this.setState({ currentMuscleName: null });
    } else {
      this.setState({ currentMuscleName: muscleName });
    }
  }

  render() {
    return (
      <div className="exercise-accordion-mobile">
        {this.state.savedMuscles.map(muscle => (
          <div key={muscle} className="muscle-group">
            <a onClick={this.showExercises} musclename={muscle}>{muscle}</a>
            {this.state.currentMuscleName === muscle ? <ExerciseList musclename={muscle} /> : ''}
          </div>
        ))
        }
      </div>
    );
  }

}
