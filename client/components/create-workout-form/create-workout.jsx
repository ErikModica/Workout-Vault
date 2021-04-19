import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
import ExerciseForm from './exercise-form';

export default class CreateWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutName: '',
      muscleOptions: [],
      selectedMuscles: [],
      exerciseCount: [],
      formSelections: {},
      createdExercises: []
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMuscleGroup = this.handleChangeMuscleGroup.bind(this);
    this.handleChangeExerciseCount = this.handleChangeExerciseCount.bind(this);
    this.handleChangeExerciseChoices = this.handleChangeExerciseChoices.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('/api/muscles')
      .then(result => result.json())
      .then(muscles => {
        this.setState({ muscleOptions: muscles });
      });
  }

  handleChangeName(event) {
    this.setState({ workoutName: event.target.value });
  }

  handleChangeMuscleGroup(selection) {
    this.setState({ selectedMuscles: selection });
  }

  handleChangeExerciseCount(event) {
    const exerciseCountNum = event.target.value;
    const exerciseCountArr = [];
    for (let i = 1; i <= exerciseCountNum; i++) {
      exerciseCountArr.push(i);
    }
    this.setState({ exerciseCount: exerciseCountArr });
  }

  handleChangeExerciseChoices(event) {
    const createdExercisesCopy = [...this.state.createdExercises];
    createdExercisesCopy.push(JSON.parse(event.target.value));
    this.setState({ createdExercises: createdExercisesCopy });
  }

  handleSubmit(event) {
    const { workoutName, selectedMuscles, exerciseCount, createdExercises } = this.state;
    const formSelections = {
      userId: 1,
      workoutName,
      selectedMuscles,
      exerciseCount: exerciseCount.length,
      createdExercises
    };
    // this.setState({ formSelections });
    fetch('/api/user-workouts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formSelections) })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      })
      .catch(err => console.error(err));
    event.preventDefault();
  }

  renderExerciseCountSelection() {
    const numOfOptionsArr = [];
    for (let i = 1; i <= 20; i++) {
      numOfOptionsArr.push(
        <option key={`${i}`} value={`${i}`}>{i}</option>
      );
    }
    numOfOptionsArr.unshift(<option key={'select'}>Select Count</option>);
    return numOfOptionsArr;
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <div>
            Name Workout
            <input className="name-workout-input cw-form-item" onChange={this.handleChangeName}></input>
          </div>
          <div className="section-line"></div>
          <div className="muscle-exercise-select-container">
            <div className="mes-select">
              Muscle(s)
              <Multiselect
                options={this.state.muscleOptions} // Options to display in the dropdown
                // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                onSelect={this.handleChangeMuscleGroup} // Function will trigger on select event
                onRemove={this.onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              />
            </div>
            <div className="mes-select">
              Exercise Count
              <select onChange={this.handleChangeExerciseCount} className="cw-form-item" name="exercise-count">
                {this.renderExerciseCountSelection()}
              </select>
            </div>
          </div>
          <div className="section-line"></div>
          <div className="created-exercise-container">
            {this.state.exerciseCount.map(num => {
              return (
               <ExerciseForm exercisechoices={this.handleChangeExerciseChoices} key={num} selectedmuscles={this.state.selectedMuscles} exercisenum={num} formselections={this.state.formSelections} />
              );
            })}
          </div>
          <input type="submit" value="Submit" />
       </form>
      </div>
    );
  }
}
