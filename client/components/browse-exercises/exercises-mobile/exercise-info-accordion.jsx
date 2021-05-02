import React from 'react';
import createMarkup from '../../../lib/create-markup';

export default class ExerciseInfoAccordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exerciseInfo: {} };
  }

  componentDidMount() {
    const exerciseID = this.props.exerciseid;
    fetch(`/api/exercise-by-id/${exerciseID}`)
      .then(result => result.json())
      .then(exerciseInfo => {
        this.setState({ exerciseInfo });
      });
  }

  render() {
    let { images, description } = this.state.exerciseInfo;
    if (!images) {
      images = [];
      images.push('', '');
    }
    return (
      <div className="exercise-details">
        <img src={images[0]}></img>
        <img src={images[1]}></img>
        <div className="exercise-steps">
          <h2>STEPS</h2>
          <p dangerouslySetInnerHTML={createMarkup(description)}></p>
        </div>
      </div>
    );
  }

}
