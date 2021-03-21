import { Equipment } from './equipment.enum';
import { Consideration } from './consideration.enum';
import { ExerciseType } from './exerciseType.enum';
import { MuscleGroup } from './muscleGroup.enum';

export type Exercise = {
  name: string;
  description: string;
  exerciseType: ExerciseType;
  mainMuscleGroups: MuscleGroup[];
  equipmentsNeeded: Equipment[];
  considerations: Consideration[];
};
