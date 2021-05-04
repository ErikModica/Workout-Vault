import fetch from 'node-fetch';
import React from 'react';
import SetItem from './set-item';

export default class ExerciseForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      setCount: [],
      currentExerciseMuscleNum: null,
      currentExerciseOptions: [],
      formSelections: this.props.formselections
    };

    this.handleChangeExerciseChoiceForExercise = this.handleChangeExerciseChoiceForExercise.bind(this);
    this.handleChangeSetsCount = this.handleChangeSetsCount.bind(this);
  }

  handleChangeExerciseChoiceForExercise(event) {
    const muscleObj = JSON.parse(event.target.value);
    const exerciseNum = parseInt(event.target.getAttribute('exercisenum'));
    this.setState({ currentExerciseMuscleNum: exerciseNum });
    this.fetchForCurrentExerciseOptions(muscleObj.id);
  }

  handleChangeSetsCount(event) {
    const setCount = event.target.value;
    const setCountArr = [];
    for (let i = 1; i <= setCount; i++) {
      setCountArr.push(i);
    }
    this.setState({ setCount: setCountArr });
  }

  renderMuscleSelectionForExercises() {
    const formattedExercises = this.props.selectedmuscles.map(muscleObj => {
      return <option key={muscleObj.id} value={JSON.stringify(muscleObj)}>{muscleObj.name}</option>;
    });
    formattedExercises.unshift(<option key={'select'}>Select Muscle</option>);
    return formattedExercises;
  }

  fetchForCurrentExerciseOptions(muscleId) {
    fetch(`/api/exercises-by-muscle/${muscleId}`)
      .then(result => result.json())
      .then(exercises => this.setState({ currentExerciseOptions: exercises }));
  }

  renderExerciseSelectionForMuscleChoice(exerciseIDArray) {
    const formattedExercises = exerciseIDArray.map(exercise => {
      exercise.exerciseNum = this.props.exercisenum;
      return <option key={exercise.id} value={JSON.stringify(exercise)}>{exercise.name}</option>;
    });
    formattedExercises.unshift(<option key={'select'}>Select Exercise</option>);
    return formattedExercises;
  }

  renderSetsAmount() {
    const formattedSets = [];
    for (let i = 1; i <= 20; i++) {
      formattedSets.push(<option key={i} value={i}>{i}</option>);
    }
    formattedSets.unshift(<option key="0" value={null}>...</option>);
    return formattedSets;
  }

  render() {
    const num = this.props.exercisenum;
    return (
      <div className="exercise-container" key={num}>
        <div className="exercise-number-sets-container">
          <div className="exercise-number-title">{`Exercise ${num}`}</div>
          <div className="exercise-sets-select">
            <h4 className="exercise-select-title">Sets</h4>
            <select onChange={this.handleChangeSetsCount} className="cw-form-item" name="sets-count-select">
              {this.renderSetsAmount()}
            </select>
          </div>
        </div>
        <div className="exercise-main-body-container">
          <div className="exercise-selections-container">
            <div className="muscle-choice-select">
              <h4 className="exercise-select-title">{'Muscle'}</h4>
              <select onChange={this.handleChangeExerciseChoiceForExercise} exercisenum={num} className="cw-form-item" name="muscle-select-for-exercise">
                {this.renderMuscleSelectionForExercises()}
              </select>
            </div>
            <div className="exercise-choice-select">
              <h4 className="exercise-select-title">{'Exercise'}</h4>
              <select onChange={this.props.exercisechoices} className="cw-form-item" name="exercise-select-for-exercise">
                {this.state.currentExerciseMuscleNum === num
                  ? this.renderExerciseSelectionForMuscleChoice(this.state.currentExerciseOptions)
                  : <option>Select a Muscle First</option>}
              </select>
            </div>
          </div>
          {this.state.setCount.map(num => {
            return <SetItem key={num} number={num} />;
          })}
        </div>
      </div>
    );
  }
}
