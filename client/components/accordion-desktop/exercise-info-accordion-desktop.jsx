import React from 'react';

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
    let { name, images, description } = this.state.exerciseInfo;
    if (!images) {
      images = [];
      images.push('', '');
    }
    return (
      <div className="exercise-details-desktop">
          <h2>{name}</h2>
          <img src={images[0]}></img>
          <img src={images[1]}></img>
          <div className="exercise-steps">
            <h3>STEPS</h3>
            <p>{description}</p>
          </div>
        </div>
    );
  }

}
