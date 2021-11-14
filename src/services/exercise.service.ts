import { db } from '../firebase.config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {
  ALL_EQUIPMENTS,
  ALL_EXERCISE_TYPES,
  ALL_MUSCLE_GROUPS,
} from '../utils/exerciseOptions';
import ExerciseCategory from '../enums/exerciseCategory.enum';
import ExerciseOption from '../types/exerciseOption.type';
import { Exercise } from '../models/exercise.model';

async function getExercises(
  selectedExerciseOptions: ExerciseOption[]
): Promise<Exercise[]> {
  return Promise.all([
    getExercisesByEquipments(selectedExerciseOptions),
    getExercisesByMainMuscleGroup(selectedExerciseOptions),
  ]).then((result) => {
    const equipmentResult: Exercise[] = result[0];
    const mainMuscleGroupResult: Exercise[] = result[1];
    const union = equipmentResult.filter((er) =>
      mainMuscleGroupResult.some((mmg) => er.name === mmg.name)
    );
    return getExercisesByType(selectedExerciseOptions, union);
  });
}

function getExercisesByType(
  selectedExerciseOptions: ExerciseOption[],
  union: Exercise[]
): Exercise[] {
  let types: string[] = selectedExerciseOptions
    .filter((eOpt) => eOpt.metadata.category == ExerciseCategory.TYPE)
    .map((typeOpt) => typeOpt.value);
  types = types.length > 0 ? types : ALL_EXERCISE_TYPES;
  return union.filter((e) => types.includes(e.type));
}

async function getExercisesByEquipments(
  selectedExerciseOptions: ExerciseOption[]
): Promise<Exercise[]> {
  let equipments: string[] = selectedExerciseOptions
    .filter((eOpt) => eOpt.metadata.category == ExerciseCategory.EQUIPMENTS)
    .map((eOpt) => eOpt.value);
  equipments = equipments.length > 0 ? equipments : ALL_EQUIPMENTS;

  const q = query(
    collection(db, 'Exercises'),
    where('equipments', 'array-contains-any', equipments)
  );
  const exerciseSnapshot = await getDocs(q);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return exerciseSnapshot.docs.map((doc: { data: () => any }) => doc.data());
}

async function getExercisesByMainMuscleGroup(
  selectedExerciseOptions: ExerciseOption[]
): Promise<Exercise[]> {
  let mainMuscleGroups: string[] = selectedExerciseOptions
    .filter(
      (eOpt) => eOpt.metadata.category == ExerciseCategory.MAIN_MUSCLE_GROUPS
    )
    .map((mOpt) => mOpt.value);
  mainMuscleGroups =
    mainMuscleGroups.length > 0 ? mainMuscleGroups : ALL_MUSCLE_GROUPS;
  const q = query(
    collection(db, 'Exercises'),
    where('main_muscle_groups', 'array-contains-any', mainMuscleGroups)
  );
  const exerciseSnapshot = await getDocs(q);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return exerciseSnapshot.docs.map((doc: { data: () => any }) => doc.data());
}

function addExercise(exercise: Exercise): void {
  // db.collection('Exercise')
  //   .doc(exercise.id)
  //   .set(exercise)
  //   .then(function () {
  //     console.log('happy!');
  //   })
  //   .catch(function (error) {
  //     console.error('Error writing document: ', error);
  //   });
}

export { addExercise, getExercises };
