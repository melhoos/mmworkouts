import ExerciseCategory from '../enums/exerciseCategory.enum';

type ExerciseOption = {
  label: string;
  value: string;
  metadata: ExerciseOptionMetaData;
};

type ExerciseOptionMetaData = {
  category: ExerciseCategory;
};

export default ExerciseOption;
