import { Base } from './base.model';

enum MuscleGroupId {
  SHOULDER = 'shoulder',
  NECK = 'neck',
  BICEP = 'bicep',
  TRICEP = 'tricep',
  CORE = 'core',
  BACK = 'back',
  LOWERBACK = 'lowerback',
  GLUTES = 'glutes',
  THIGHS = 'thighs',
  LEGS = 'legs',
}

export interface MuscleGroup extends Base {
  id: MuscleGroupId;
}

export const muscleGroups: MuscleGroup[] = [
  {
    id: MuscleGroupId.SHOULDER,
    name_no: 'Skulder',
    name_en: 'Shoulder',
  },
  {
    id: MuscleGroupId.NECK,
    name_no: 'Nakke',
    name_en: 'Neck',
  },
  {
    id: MuscleGroupId.BICEP,
    name_no: 'Bicep',
    name_en: 'Bicep',
  },
  {
    id: MuscleGroupId.TRICEP,
    name_no: 'Tricep',
    name_en: 'Tricep',
  },
  {
    id: MuscleGroupId.CORE,
    name_no: 'Kjerne',
    name_en: 'Core',
  },
  {
    id: MuscleGroupId.BACK,
    name_no: 'Rygg',
    name_en: 'Back',
  },
  {
    id: MuscleGroupId.LOWERBACK,
    name_no: 'Nedre rygg',
    name_en: 'Lower back',
  },
  {
    id: MuscleGroupId.GLUTES,
    name_no: 'Sete',
    name_en: 'Glutes',
  },
  {
    id: MuscleGroupId.THIGHS,
    name_no: 'Lår',
    name_en: 'Thighs',
  },
  {
    id: MuscleGroupId.LEGS,
    name_no: 'Legger',
    name_en: 'Legs',
  },
];
