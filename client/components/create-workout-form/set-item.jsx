import React from 'react';

export default class SetItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({ reps: null, weight: null, alternation: null, duration: null });
  }

  render() {
    return (
      <div className="set-item-container">
        <div className="set-item-reps-weight-number-container">
          <div className="exercise-select-title set-title-num">{`Set ${this.props.number}`}</div>
          <div className="set-item-reps-weight-container">
            <label className="exercise-select-title">Reps</label>
            <input type="number" className="cw-form-item" max="200" name="reps-select"></input>
            <label className="exercise-select-title">Weight</label>
            <input type="number" className="cw-form-item" max="1000" name="weight-select"></input>
        </div>
        </div>
      </div>
    );
  }
}
