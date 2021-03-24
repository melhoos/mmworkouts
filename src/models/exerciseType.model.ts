import { Base } from './base.model';

enum ExerciseTypeId {
  STRENGTH,
  CARDIO,
  FLEXIBILITY,
  BALANCE,
}

export interface ExerciseType extends Base {
  id: ExerciseTypeId;
}

export const exerciseTypes: ExerciseType[] = [
  {
    id: ExerciseTypeId.STRENGTH,
    name_no: 'Styrke',
    name_en: 'Strength',
  },
  {
    id: ExerciseTypeId.CARDIO,
    name_no: 'Kondisjon',
    name_en: 'Cardio',
  },
  {
    id: ExerciseTypeId.FLEXIBILITY,
    name_no: 'Fleksibilitet',
    name_en: 'Flexibility',
  },
  {
    id: ExerciseTypeId.BALANCE,
    name_no: 'Balanse',
    name_en: 'Balance',
  },
];
