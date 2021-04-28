import React from 'react';
import createMarkup from '../lib/create-markup';

export default class ExerciseModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = { exerciseInfo: {} };
  }

  componentDidMount() {
    fetch(`/api/exercise-by-id/${this.props.exerciseid}`)
      .then(result => result.json())
      .then(exerciseInfo => {
        this.setState({ exerciseInfo });
      })
      .catch(err => console.error(err));
  }

  render() {
    let { name, images, description } = this.state.exerciseInfo;
    if (!images) {
      images = [];
      images.push('', '');
    }
    return (
      <div className="exercise-modal-bg">
        <div className="exercise-modal-container">
          <i onClick={this.props.hidemodal} className="fas fa-times exit-icon"></i>
          <div className="exercise-modal-title">{name}</div>
          <div className="exercise-modal-images-container">
            <img className="exercise-modal-images" src={images[0]}></img>
            <img className="exercise-modal-images" src={images[1]}></img>
          </div>
          <div className="exercise-modal-steps">
            <div>STEPS</div>
            <p dangerouslySetInnerHTML={createMarkup(description)}></p>
          </div>
        </div>
      </div>
    );
  }
}
