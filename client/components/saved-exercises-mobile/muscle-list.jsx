import React from 'react';

export default class SavedExercisesMobile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { savedExercises: {}, formattedExercises: [] };
  }

  componentDidMount() {
    fetch('/api/saved-exercises')
      .then(res => res.json())
      .then(data => {
        for (const key in data) {
          if (data[key].length === 0) {
            delete data[key];
          }
        }
        this.setState({ savedExercises: data });
        this.renderSavedMuscles();
      });
  }

  decipherExerciseID(event) {
    const exerciseID = parseInt(event.target.getAttribute('exerciseid'));
    if (exerciseID === this.state.currentExerciseID) {
      this.setState({ currentExerciseID: null });
    } else {
      this.setState({ currentExerciseID: exerciseID });
    }
  }

  renderSavedMuscles() {
    const savedMuscleList = [];
    for (const key in this.state.savedExercises) {
      savedMuscleList.push(
        <div key={key} className="muscle-group">
          <a onClick={this.decipherMuscleID}>{key}</a>
        </div>
      );
    }
    this.setState({ formattedExercises: savedMuscleList });
  }

  render() {
    return (
      <div className="exercise-accordion-mobile">
        {this.state.formattedExercises}
      </div>
    );
  }

}
