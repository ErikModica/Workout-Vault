import React from 'react';

export default class SavedExercisesMobile extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   fetch('/api/muscles')
  //     .then(result => result.json())
  //     .then(muscles => {
  //       this.setState({ muscles });
  //     });
  // }

  // render() {
  //   return (
  //     <div className="exercise-accordion-mobile">
  //       {this.state.muscles.map(muscle => (
  //         <div key={muscle.id} className="muscle-group">
  //           <a onClick={this.decipherMuscleID} muscleid={muscle.id}>{muscle.name}</a>
  //         </div>
  //       ))
  //       }
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="saved-exercise-list-mobile">
        <h1>Ni Hao Ma(Mobile)</h1>
      </div>
    );
  }

}
