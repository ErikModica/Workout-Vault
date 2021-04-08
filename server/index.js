require('dotenv/config');
const nodeFetch = require('node-fetch');
const express = require('express');
const staticMiddleware = require('./static-middleware');

const app = express();

app.use(staticMiddleware);

app.get('/api/muscles', (req, res, next) => {
  getMuscles()
    .then(results => res.json(results))
    .catch(err => next(err));
});

app.get('/api/exercises-by-muscle/:muscleid', (req, res, next) => {
  getExercisesByMuscle(req.params.muscleid)
    .then(results => res.json(results));
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

function getMuscles() {
  return nodeFetch('https://wger.de/api/v2/muscle/')
    .then(res => res.json())
    .then(data => {
      return data.results.map(muscle => {
        const formatedMuscle = { id: muscle.id, name: muscle.name };
        return formatedMuscle;
      });
    });

}

function getExercisesByMuscle(muscleID) {
  return nodeFetch(`https://wger.de/api/v2/exercise/?muscles=${muscleID}&language=2`)
    .then(res => res.json())
    .then(data => {
      return data.results
        .map(exercise => {
          const formatedExercise = { id: exercise.id, name: exercise.name, description: exercise.description };
          return formatedExercise;
        })
        .filter(exercise => exercise.description.length > 5);
    });
}
