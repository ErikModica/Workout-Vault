import React from 'react';

export default class SetItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({ reps: null, weight: null, alternation: null, duration: null, extraSettingsShown: false });
    this.showExtraSettings = this.showExtraSettings.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  showExtraSettings() {
    this.setState({ extraSettingsShown: !this.state.extraSettingsShown });
  }

  handleChange() {
    const changedField = event.target.name;
    this.setState({ [changedField]: event.target.value });
  }

  renderExtraSettings() {
    return (
      <>
      <div className="set-item-extra-settings-container">
        <div className="set-item-extra-settings-input-group">
          <div className="exercise-select-title">Alternation</div>
          <select onChange={this.handleChange} name="alternation" className="cw-form-item">
            <option value="" display="none">Select Alternation</option>
            <option value="negative">negative</option>
            <option value="bottom hold">bottom hold</option>
            <option value="mid hold">mid hold</option>
            <option value="top hold">top hold</option>
          </select>
        </div>
        <label className="exercise-select-title set-item-extra-settings-input-group">Duration
          <input onChange={this.handleChange} type="number" className="cw-form-item" min="0" max="600" name="duration"></input>
        </label>
      </div>
        <i onClick={this.showExtraSettings} className="si-dropdown-icon fas fa-caret-up"></i>
      </>
    );
  }

  render() {
    return (
      <div className="set-item-container">
        <div className="set-item-reps-weight-number-container">
          <div className="exercise-select-title set-title-num">{`Set ${this.props.number}`}</div>
          <div className="set-item-reps-weight-container">
            <label className="exercise-select-title">Reps</label>
            <input onChange={this.handleChange} type="number" className="cw-form-item" min="0" max="200" name="reps"></input>
            <label className="exercise-select-title">Weight</label>
            <input onChange={this.handleChange} type="number" className="cw-form-item" min="0" max="1000" name="weight"></input>
          </div>
        </div>
        <div className="set-item-dropdown">
          {this.state.extraSettingsShown
            ? this.renderExtraSettings()
            : <i onClick={this.showExtraSettings} className="si-dropdown-icon fas fa-caret-down"></i>}
        </div>
      </div>
    );
  }
}
