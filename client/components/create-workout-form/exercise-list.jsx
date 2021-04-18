import React from 'react';

export default class ExerciseListBasedOnMuscle extends React.Component {

  constructor(props) {
    super(props);
    this.state = { currentExerciseOptions: [] };
  }

  componentDidMount() {
    fetch(`/api/exercises-by-muscle/${this.props.muscleid}`)
      .then(result => result.json())
      .then(exercises => this.setState({ currentExerciseOptions: exercises }));
  }

  renderExerciseList() {
    const formattedExercises = this.state.currentExerciseOptions.map(exercise => {
      return <option key={exercise.id} exercisenum={this.props.exercisenum} value={exercise.id}>{exercise.name}</option>;
    });
    formattedExercises.unshift(<option key={'select'}>Select Exercise</option>);
    return formattedExercises;
  }

  render() {
    return this.renderExerciseList();
  }
}
