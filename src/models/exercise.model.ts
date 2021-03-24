import { Equipment } from './equipment.model';
import { Consideration } from './consideration.model';
import { ExerciseType } from './exerciseType.model';
import { MuscleGroup } from './muscleGroup.model';
import { Base } from './base.model';

export interface Exercise extends Base {
  id: string;
  exercise_type: ExerciseType;
  main_muscle_groups: MuscleGroup[];
  equipments_needed: Equipment[];
  considerations: Consideration[];
  tips: string;
  url: string;
}
