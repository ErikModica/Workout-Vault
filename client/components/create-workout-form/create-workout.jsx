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

    this.style = {
      multiselectContainer: {
        width: '90%'

      },
      searchBox: {
        padding: '0 0 0 0.7rem',
        borderRadius: '20px',
        backgroundColor: 'rgb(236, 236, 236)',
        userSelect: 'none',
        border: 'solid black 1px',
        marginTop: '4px',
        caretColor: 'transparent'
      },
      inputField: {
        paddingBottom: '0.4rem'
      },
      chips: {
        display: 'none'
      },
      option: {
        fontSize: '0.7em',
        padding: '0.3rem'
      }
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
    const newExercise = JSON.parse(event.target.value);
    const fieldName = event.target.name;
    if (fieldName === 'exercise-select') {
      if (createdExercisesCopy.length === 0) {
        createdExercisesCopy.push(newExercise);
      } else {
        const editedExerciseIndex = createdExercisesCopy.findIndex(exercise => exercise.exerciseNum === newExercise.exerciseNum);
        if (editedExerciseIndex !== -1) {
          createdExercisesCopy.splice(editedExerciseIndex, 1, newExercise);
        } else {
          createdExercisesCopy.push(newExercise);
        }
      }
    }

    this.setState({ createdExercises: createdExercisesCopy });
  }

  handleSubmit(event) {
    const { workoutName, selectedMuscles, exerciseCount, createdExercises } = this.state;
    const formSelections = {
      userId: 1,
      workoutName,
      selectedMuscles,
      exerciseCount: exerciseCount.length,
      exerciseInfo: JSON.stringify(createdExercises)
    };
    fetch('/api/user-workouts', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formSelections) })
      .then(res => res.json())
      .then(result => result)
      .catch(err => console.error(err));
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
            <div>Name Workout</div>
            <input className="name-workout-input cw-form-item" onChange={this.handleChangeName}></input>
          </div>
          <div className="section-line"></div>
          <div className="muscle-exercise-select-container">
            <div className="mes-select">
              <div>Muscle(s)</div>
              <Multiselect
                placeholder="Select Muscle(s)"
                emptyRecordMsg="No muscles found"
                hidePlaceholder="true"
                showCheckbox="true"
                showArrow="true"
                closeOnSelect={false}
                options={this.state.muscleOptions}
                style={this.style}
                onSelect={this.handleChangeMuscleGroup}
                onRemove={this.onRemove}
                displayValue="name"
              />
            </div>
            <div className="mes-select">
              <div>Exercise Count</div>
              <select onChange={this.handleChangeExerciseCount} className="exercise-count-select cw-form-item" name="exercise-count">
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
          <input className="cw-form-item" type="submit" value="Submit" />
       </form>
      </div>
    );
  }
}
