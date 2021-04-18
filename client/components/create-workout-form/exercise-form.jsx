import React from 'react';
import ExerciseList from './exercise-list';

export default class ExerciseForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentExerciseMuscleChoice: {},
      currentExerciseOptions: [],
      formSelections: this.props.formselections
    };

    this.handleChangeExerciseChoiceForExercise = this.handleChangeExerciseChoiceForExercise.bind(this);
    this.handleChangeSaveExerciseChoice = this.handleChangeSaveExerciseChoice.bind(this);
  }

  handleChangeExerciseChoiceForExercise(event) {
    const exerciseNum = parseInt(event.target.getAttribute('exercisenum'));
    this.setState({ currentExerciseMuscleChoice: { exerciseNum, muscleId: event.target.value } });
    // console.log(event.target.value);
  }

  handleChangeSaveExerciseChoice(event) {
    console.log(event.target.getAttribute('exercisenum'));
    console.log(event.target.value);
    const exerciseChoice = event.target.value;
    this.setState({ formSelections: {} });
  }

  renderMuscleSelectionForExercises() {
    const formattedExercises = this.props.selectedmuscles.map(muscleObj => {
      return <option key={muscleObj.id} value={muscleObj.id}>{muscleObj.name}</option>;
    });
    formattedExercises.unshift(<option key={'select'}>Select Muscle</option>);
    return formattedExercises;
  }

  render() {
    const num = this.props.exercisenum;
    return (
      <div className="exercise-container" key={num}>
        <h2>{`Exercise ${num}`}</h2>
        <div className="exercise-selections-container">
          <div className="muscle-choice-select">
            <h4>{'Muscle'}</h4>
            <select onChange={this.handleChangeExerciseChoiceForExercise} exercisenum={num} className="cw-form-item" name="muscle-select-for-exercise">
              {this.renderMuscleSelectionForExercises()}
            </select>
          </div>
          <div className="exercise-choice-select">
            <h4>{'Exercise'}</h4>
            <select onChange={this.handleChangeSaveExerciseChoice} className="cw-form-item" name="exercise-select-for-exercise">
              {this.state.currentExerciseMuscleChoice.exerciseNum === num ? <ExerciseList muscleid={this.state.currentExerciseMuscleChoice.muscleId} exercisenum={num} /> : ''}
            </select>
          </div>
        </div>
      </div>
    );
  }
}
