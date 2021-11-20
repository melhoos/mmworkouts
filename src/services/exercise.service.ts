import { db } from '../firebase.config';
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  setDoc,
} from 'firebase/firestore';
import {
  ALL_EQUIPMENTS,
  ALL_EXERCISE_TYPES,
  ALL_MUSCLE_GROUPS,
} from '../utils/exerciseOptions';
import ExerciseCategory from '../enums/exerciseCategory.enum';
import ExerciseOption from '../types/exerciseOption.type';
import { Exercise } from '../types/exercise.type';

async function getExercises(
  selectedExerciseOptions: ExerciseOption[]
): Promise<Exercise[]> {
  const equipments: string[] = getSelectedOptionByCategory(
    selectedExerciseOptions,
    ExerciseCategory.EQUIPMENTS
  );

  const mainMuscleGroups: string[] = getSelectedOptionByCategory(
    selectedExerciseOptions,
    ExerciseCategory.MAIN_MUSCLE_GROUPS
  );

  const types: string[] = getSelectedOptionByCategory(
    selectedExerciseOptions,
    ExerciseCategory.TYPE
  );

  if (equipments.length == 0 && mainMuscleGroups.length == 0) {
    return getExercisesByType(types);
  } else if (equipments.length == 0) {
    return filterExercisesByType(
      types,
      await getExercisesByMainMuscleGroup(mainMuscleGroups)
    );
  } else if (mainMuscleGroups.length == 0) {
    return filterExercisesByType(
      types,
      await getExercisesByEquipments(equipments)
    );
  } else {
    return Promise.all([
      getExercisesByEquipments(equipments),
      getExercisesByMainMuscleGroup(mainMuscleGroups),
    ]).then((result) => {
      const equipmentResult: Exercise[] = result[0];
      const mainMuscleGroupResult: Exercise[] = result[1];
      const union = equipmentResult.filter((er) =>
        mainMuscleGroupResult.some((mmg) => er.name === mmg.name)
      );
      return filterExercisesByType(types, union);
    });
  }
}

function filterExercisesByType(types: string[], union: Exercise[]): Exercise[] {
  types = types.length > 0 ? types : ALL_EXERCISE_TYPES;
  return union.filter((e) => types.includes(e.type));
}

async function getExercisesByType(types: string[]): Promise<Exercise[]> {
  types = types.length > 0 ? types : ALL_EXERCISE_TYPES;

  const q = query(collection(db, 'Exercises'), where('type', 'in', types));
  const exerciseSnapshot = await getDocs(q);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return exerciseSnapshot.docs.map((doc: { data: () => any }) => doc.data());
}

async function getExercisesByEquipments(
  equipments: string[]
): Promise<Exercise[]> {
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
  mainMuscleGroups: string[]
): Promise<Exercise[]> {
  mainMuscleGroups =
    mainMuscleGroups.length > 0 && !mainMuscleGroups.includes('hele kroppen')
      ? mainMuscleGroups
      : ALL_MUSCLE_GROUPS;
  const q = query(
    collection(db, 'Exercises'),
    where('main_muscle_groups', 'array-contains-any', mainMuscleGroups)
  );
  const exerciseSnapshot = await getDocs(q);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return exerciseSnapshot.docs.map((doc: { data: () => any }) => doc.data());
}

function getSelectedOptionByCategory(
  selectedExerciseOptions: ExerciseOption[],
  category: ExerciseCategory
): string[] {
  return selectedExerciseOptions
    .filter((eOpt) => eOpt.metadata.category == category)
    .map((mOpt) => mOpt.value);
}

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
}

export { addExercise, getExercises };
