import { db } from '../firebase.config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import WorkoutType from '../enums/workoutType.enum';
import { Exercise } from '../types/exercise.type';
import WorkoutFocus from '../enums/workoutFocus.enum';
import WorkoutEquipment from '../enums/workoutEquipments.enum';

async function getExercises(
  types: string[],
  mainMuscleGroups: string[],
  equipments: string[]
): Promise<Exercise[]> {
  const selectedAllMainMuscleGroups: boolean =
    mainMuscleGroups.length == Object.values(WorkoutFocus).length;
  const selectedAllEquipments: boolean =
    equipments.length == Object.values(WorkoutEquipment).length;

  let foundExercises: Exercise[];
  if (selectedAllMainMuscleGroups && selectedAllEquipments) {
    foundExercises = await getExercisesByType(types);
  } else if (selectedAllMainMuscleGroups) {
    foundExercises = await getExercisesByEquipments(equipments);
  } else if (selectedAllEquipments) {
    foundExercises = await getExercisesByMuscleGroups(mainMuscleGroups);
  } else {
    foundExercises = await getExercisesByEquipmentsAndMuscleGroup(
      mainMuscleGroups,
      equipments
    );
  }
  return filterExercisesByType(types, foundExercises);
}

async function getExercisesByEquipmentsAndMuscleGroup(
  mainMuscleGroups: string[],
  equipments: string[]
): Promise<Exercise[]> {
  return Promise.all([
    getExercisesByEquipments(equipments),
    getExercisesByMuscleGroups(mainMuscleGroups),
  ]).then((result) => {
    const equipmentResult: Exercise[] = result[0];
    const mainMuscleGroupResult: Exercise[] = result[1];
    return equipmentResult.filter((er) =>
      mainMuscleGroupResult.some((mmg) => er.name === mmg.name)
    );
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
    where('equipments', 'array-contains-any', workoutEquipments.splice(0, 10))
  );
  const exerciseSnapshot = await getDocs(q);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return exerciseSnapshot.docs.map((doc: { data: () => any }) => doc.data());
}

async function getExercisesByType(types: string[]): Promise<Exercise[]> {
  const q = query(collection(db, 'Exercises'), where('type', 'in', types));
  const exerciseSnapshot = await getDocs(q);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return exerciseSnapshot.docs.map((doc: { data: () => any }) => doc.data());
}

function filterExercisesByType(types: string[], union: Exercise[]): Exercise[] {
  const allWorkoutTypes: string[] = Object.values(WorkoutType);
  types = types.length > 0 ? types : allWorkoutTypes;
  return union.filter((e) => types.includes(e.type));
}

/*async function queryTen(
  entries: string[],
  getF: (s: string[]) => Promise<Exercise[]>
): Promise<Exercise[]> {
  if (entries.length <= 10) {
    return getF(entries);
  } else {
    let exercises: Exercise[] = [];
    for (let i = 0; i < entries.length; i += 10) {
      const subList = exercises.slice(i, i + 10);
    }
  }
}*/

/*function queryTen(
  entries: string[],
  getF: (s: string[]) => Promise<Exercise[]>
): Exercise[] {
  const subLists: string[][] = getSublists(entries);
  let exercises: Exercise[] = [];
  subLists.forEach(async (subList) => {
    const result: Exercise[] = await getF(subList);
    exercises = [...exercises, ...result];
  });
  return exercises;
}

function getSublists(entries: string[]): string[][] {
  const numberOfTens: number = Math.floor(entries.length / 10);
  const subLists: string[][] = [];
  if (numberOfTens == 0) {
    subLists.push(entries);
  } else {
    [...Array(numberOfTens)].forEach((_, i) => {
      subLists.push(entries.slice(i, i + 10));
    });

    subLists.push(entries.slice(10 * numberOfTens));
  }

  return subLists;
}*/

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
