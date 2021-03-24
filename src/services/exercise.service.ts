import { db } from '../firebase.config';
import { Exercise } from '../models/exercise.model';

/*function addExercise(exercise: Exercise): void {
  db.collection('Exercise')
    .doc(exercise.name)
    .set({
      name_no: exercise.name,
    })
    .then(function () {
      console.log('happy!');
    })
    .catch(function (error) {
      console.error('Error writing document: ', error);
    });
}*/

function getAllExercises(): void {
  // todo
}

function getExerciseByType(): void {
  // todo
}
