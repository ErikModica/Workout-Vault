import React from 'react';

export default class SetItem extends React.Component {

  render() {
    return (
      <div className="set-item-container">
        <div className="set-item-reps-weight-container">
          <div className="exercise-select-title set-title-num">{`Set ${this.props.number}`}</div>
            <div className="sirwc">
              <div className="exercise-select-title">Reps</div>
              <select className="cw-form-item" name="reps-select">
                <option>yooyi</option>
              </select>
              <div className="exercise-select-title">Weight</div>
              <select className="cw-form-item" name="weight-select">
                <option>yooyi</option>
              </select>
          </div>
        </div>
      </div>
    );
  }
}
