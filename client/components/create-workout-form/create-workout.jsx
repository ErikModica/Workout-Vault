import React from 'react';
import { Multiselect } from 'multiselect-react-dropdown';
// import '../../../server/public/styles.css';

export default class CreateWorkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workoutName: '',
      muscleOptions: [],
      selectedMuscles: [],
      exerciseCount: []
    };

    // this.style = {
    //   multiselectContainer: {
    //     border-radius: 10px
    //   }
    // };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMuscleGroup = this.handleChangeMuscleGroup.bind(this);
    this.handleChangeExerciseCount = this.handleChangeExerciseCount.bind(this);
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
    console.log(event.target.value);
  }

  handleChangeMuscleGroup(selection) {
    // const selectedMuscles = [...this.state.selectedMuscles];
    const selectedMuscles = [];
    selectedMuscles.push(selection);
    this.setState({ selectedMuscles });
    console.log(this.state.selectedMuscles);
    fetch();
  }

  handleChangeExerciseCount(event) {
    const exerciseCountNum = event.target.value;
    const exerciseCountArr = [];
    for (let i = 1; i <= exerciseCountNum; i++) {
      exerciseCountArr.push(i);
    }
    this.setState({ exerciseCount: exerciseCountArr });
  }

  handleSubmit(event) {
    // console.log(this.state.value);
    event.preventDefault();
  }

  renderExerciseCountSelection() {
    const numOfOptionsArr = [];
    for (let i = 0; i <= 20; i++) {
      numOfOptionsArr.push(
        <option key={`${i}`} value={`${i}`}>{i}</option>
      );
    }
    return numOfOptionsArr;
  }

  // renderExerciseSelection() {
  //   r
  // }

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
                <div key={num}>
                  {`Exercise ${num}`}
                  <select onChange={this.handleChangeExerciseCount} className="cw-form-item" name="exercise-count"></select>
                </div>
              );
            })}
          </div>
       </form>
      </div>
    );
  }
}
