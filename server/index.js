require('dotenv/config');
const nodeFetch = require('node-fetch');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const pg = require('pg');

const app = express();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(staticMiddleware);

app.use(express.json());

app.get('/api/muscles', (req, res, next) => {
  getMuscles()
    .then(results => res.json(results))
    .catch(err => next(err));
});

app.get('/api/exercises-by-muscle/:muscleid', (req, res, next) => {
  getExercisesByMuscle(req.params.muscleid)
    .then(results => res.json(results));
});

app.get('/api/exercise-by-id/:exerciseid', (req, res, next) => {
  getExerciseByID(req.params.exerciseid)
    .then(results => res.json(results));
});

app.post('/api/saved-exercises', (req, res, next) => {
  const { userId, exerciseId, username, muscleId, muscleName } = req.body;
  if (!userId || !exerciseId || !username || !muscleId || !muscleName) {
    throw new ClientError(400, 'enter all required fields');
  }
  const sql = `
              insert into "saved-exercises" ("userId", "exerciseId", "username", "muscleId", "muscleName")
              values ($1, $2, $3, $4, $5)
              returning *
              `;
  const values = [userId, exerciseId, username, muscleId, muscleName];

  db.query(sql, values)
    .then(result => {
      res.status(200).json(result.rows[0]);
    })
    .catch(err => console.error(err));
});

app.get('/api/saved-exercises', (req, res, next) => {
  const sql = `
              select "exerciseId", "muscleId", "muscleName"
              from "saved-exercises";
              `;
  db.query(sql)
    .then(result => {
      const muscleList = ['Anterior deltoid', 'Biceps brachii', 'Biceps femoris', 'Brachialis', 'Gastrocnemius', 'Gluteus maximus', 'Latissimus dorsi', 'Obliquus externus abdominis', 'Pectoralis major', 'Quadriceps femoris', 'Rectus abdominis', 'Serratus anterior', 'Soleus', 'Trapeziusz', 'Triceps brachii'];
      const formattedMuscleObject = {};
      for (let i = 0; i < muscleList.length; i++) {
        formattedMuscleObject[muscleList[i]] = [];
      }
      for (let i = 0; i < result.rows.length; i++) {
        formattedMuscleObject[result.rows[i].muscleName].push(result.rows[i].exerciseId);
      }
      res.status(200).json(formattedMuscleObject);
    })
    .catch(err => console.error(err));
});

app.use(errorMiddleware);

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
        .filter(exercise => exercise.description.length > 5)
        .map(exercise => {
          const formatedExercises = { id: exercise.id, name: exercise.name };
          return formatedExercises;
        });
    });
}

function getExerciseByID(exerciseID) {
  return nodeFetch(`https://wger.de/api/v2/exerciseinfo/${exerciseID}/`)
    .then(res => res.json())
    .then(data => {
      const images = data.images.map(imageInfo => imageInfo.image);
      const formatedExercise = { id: data.id, name: data.name, description: data.description, images };
      return formatedExercise;
    });
}
