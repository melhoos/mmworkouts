import ExerciseOption from '../types/exerciseOption.type';
import ExerciseCategory from '../enums/exerciseCategory.enum';

const exerciseType: ExerciseOption[] = [
  {
    label: 'Styrke',
    value: 'styrke',
    metadata: { category: ExerciseCategory.TYPE },
  },
  {
    label: 'Cardio',
    value: 'cardio',
    metadata: { category: ExerciseCategory.TYPE },
  },
];
const equipments: ExerciseOption[] = [
  {
    label: 'Ingen utstyr',
    value: '',
    metadata: { category: ExerciseCategory.EQUIPMENTS },
  },
  {
    label: 'Kettlebell',
    value: 'kettlebell',
    metadata: { category: ExerciseCategory.EQUIPMENTS },
  },
  {
    label: 'Manual',
    value: 'manual',
    metadata: { category: ExerciseCategory.EQUIPMENTS },
  },
  {
    label: 'Miniband',
    value: 'miniband',
    metadata: { category: ExerciseCategory.EQUIPMENTS },
  },
];
const mainMuscle: ExerciseOption[] = [
  {
    label: 'Hele kroppen',
    value: 'hele kroppen',
    metadata: { category: ExerciseCategory.MAIN_MUSCLE_GROUPS },
  },
  {
    label: 'Bakside lår',
    value: 'bakside lår',
    metadata: { category: ExerciseCategory.MAIN_MUSCLE_GROUPS },
  },
  {
    label: 'Bryst',
    value: 'bryst',
    metadata: { category: ExerciseCategory.MAIN_MUSCLE_GROUPS },
  },
  {
    label: 'Biceps',
    value: 'biceps',
    metadata: { category: ExerciseCategory.MAIN_MUSCLE_GROUPS },
  },
  {
    label: 'Kjerne',
    value: 'kjerne',
    metadata: { category: ExerciseCategory.MAIN_MUSCLE_GROUPS },
  },
  {
    label: 'Sete',
    value: 'sete',
    metadata: { category: ExerciseCategory.MAIN_MUSCLE_GROUPS },
  },
  {
    label: 'Triceps',
    value: 'triceps',
    metadata: { category: ExerciseCategory.MAIN_MUSCLE_GROUPS },
  },
];
const exerciseOptions = [
  {
    label: 'Type',
    options: exerciseType,
  },
  {
    label: 'Muskelgruppe',
    options: mainMuscle,
  },
  {
    label: 'Utstyr',
    options: equipments,
  },
];

export const ALL_EXERCISE_TYPES = exerciseType.map((option) => option.value);
export const ALL_EQUIPMENTS = equipments.map((option) => option.value);
export const ALL_MUSCLE_GROUPS = mainMuscle.map((option) => option.value);

export default exerciseOptions;
