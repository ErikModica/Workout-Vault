import React from 'react';

export default class SetItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({ reps: null, weight: null, alternation: null, duration: null, extraSettingsShown: false });
    this.showExtraSettings = this.showExtraSettings.bind(this);
  }

  showExtraSettings() {
    this.setState({ extraSettingsShown: !this.state.extraSettingsShown });
  }

  renderExtraSettings() {
    return (
      <div className="set-item-extra-settings-container">
        <div className="set-item-extra-settings-input-group">
          <div className="exercise-select-title">Alternation</div>
          <select name="alternation-select" className="cw-form-item">
            <option value="negative">negative</option>
            <option value="bottom hold">bottom hold</option>
            <option value="mid hold">mid hold</option>
            <option value="top hold">top hold</option>
          </select>
        </div>
        <label className="exercise-select-title set-item-extra-settings-input-group">Duration
          <input type="number" className="cw-form-item" min="0" max="600" name="duration-input"></input>
        </label>
      </div>
    );
  }

  render() {
    return (
      <div className="set-item-container">
        <div className="set-item-reps-weight-number-container">
          <div className="exercise-select-title set-title-num">{`Set ${this.props.number}`}</div>
          <div className="set-item-reps-weight-container">
            <label className="exercise-select-title">Reps</label>
            <input type="number" className="cw-form-item" min="0" max="200"></input>
            <label className="exercise-select-title">Weight</label>
            <input type="number" className="cw-form-item" min="0" max="1000"></input>
          </div>
        </div>
        <div className="set-item-dropdown">
          {this.state.extraSettingsShown ? this.renderExtraSettings() : <i onClick={this.showExtraSettings} className="si-dropdown-icon fas fa-caret-down"></i>}
        </div>
      </div>
    );
  }
}
