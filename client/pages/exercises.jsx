import React from 'react';

export default function Exercises(props) {
  return (
    <>
      <div className="current-page">EXERCISES</div>
      <main>
        <div className="exercise-accordion">
          <div className="muscle-group">
            <div>Abs</div>
          </div>
          <div className="muscle-group">
            <div>Biceps</div>
          </div>
          <div className="muscle-group">
            <div>Calves</div>
          </div>
          <div className="muscle-group">
            <div>Forearms</div>
          </div>
          <div className="muscle-group">
            <div>Glutes</div>
          </div>
          <div className="muscle-group">
            <div>Hamstrings</div>
          </div>
          <div className="muscle-group">
            <div>Lats</div>
            <div className="exercise">
              <div>Lat Pulldowns</div>
              <div className="exercise-details">
                <img src="http://s3.amazonaws.com/prod.skimble/assets/1442226/image_iphone.jpg"></img>
                <div className="exercise-steps">
                  <h2>STEPS</h2>
                  <ol>
                    <li>Do a backflip</li>
                    <li>Continue to land on your feet and dont make a fool of yourself</li>
                    <li>Example text because I dont feel like englishing a sentence
                      right now but this is going to be a long sentence, damn my typing
                      is fast today look at me go I havent missed a key syke I just did.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="muscle-group">
            <div>Lowerback</div>
          </div>
          <div className="muscle-group">
            <div>Midback</div>
          </div>
          <div className="muscle-group">
            <div>Quads</div>
          </div>
          <div className="muscle-group">
            <div>Shoulders</div>
          </div>
          <div className="muscle-group">
            <div>Traps</div>
          </div>
          <div className="muscle-group">
            <div>Triceps</div>
          </div>
        </div>
      </main>
    </>
  );
}
