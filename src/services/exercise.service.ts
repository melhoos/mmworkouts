import { db } from '../firebase.config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import WorkoutType from '../enums/workoutType.enum';
import { Exercise } from '../types/exercise.type';

async function getExercises(
  types: string[],
  mainMuscleGroups: string[],
  equipments: string[]
): Promise<Exercise[]> {
  return Promise.all([
    getExercisesByEquipments(equipments),
    getExercisesByMuscleGroups(mainMuscleGroups),
  ]).then((result) => {
    const equipmentResult: Exercise[] = result[0];
    const mainMuscleGroupResult: Exercise[] = result[1];
    const union = equipmentResult.filter((er) =>
      mainMuscleGroupResult.some((mmg) => er.name === mmg.name)
    );
    return filterExercisesByType(types, union);
  });
}

async function getExercisesByMuscleGroups(
  workoutFocuses: string[]
): Promise<Exercise[]> {
  const q = query(
    collection(db, 'Exercises'),
    where('main_muscle_groups', 'array-contains-any', workoutFocuses)
  );
  const exerciseSnapshot = await getDocs(q);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return exerciseSnapshot.docs.map((doc: { data: () => any }) => doc.data());
}

async function getExercisesByEquipments(
  workoutEquipments: string[]
): Promise<Exercise[]> {
  const q = query(
    collection(db, 'Exercises'),
    where('equipments', 'array-contains-any', workoutEquipments)
  );
  const exerciseSnapshot = await getDocs(q);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return exerciseSnapshot.docs.map((doc: { data: () => any }) => doc.data());
}

function filterExercisesByType(types: string[], union: Exercise[]): Exercise[] {
  const allWorkoutTypes: string[] = Object.values(WorkoutType);
  types = types.length > 0 ? types : allWorkoutTypes;
  return union.filter((e) => types.includes(e.type));
}
/*

async function addExercise(
  exerciseName: string,
  selectedExerciseOptions: ExerciseOption[]
): Promise<boolean> {
  if (exerciseName.length == 0) {
    // eslint-disable-next-line no-console
    console.warn('No name!');
    return false;
  }

  const types: string[] = getSelectedOptionByCategory(
    selectedExerciseOptions,
    ExerciseCategory.TYPE
  );

  if (types.length == 0) {
    // eslint-disable-next-line no-console
    console.warn('No type!');
    return false;
  }

  const equipments: string[] = getSelectedOptionByCategory(
    selectedExerciseOptions,
    ExerciseCategory.EQUIPMENTS
  );

  const mainMuscleGroups: string[] = getSelectedOptionByCategory(
    selectedExerciseOptions,
    ExerciseCategory.MAIN_MUSCLE_GROUPS
  );

  if (mainMuscleGroups.length == 0) {
    // eslint-disable-next-line no-console
    console.warn('Must have at least one musclegroup');
    return false;
  }

  const exerciseToAdd: Exercise = {
    name: exerciseName,
    type: types[0],
    main_muscle_groups: mainMuscleGroups,
    equipments: equipments,
  };

  return await setDoc(doc(db, 'Exercises', exerciseName), exerciseToAdd)
    .then(() => {
      return true;
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.warn('error: ', e);
      return false;
    });
}*/

export { getExercises };
