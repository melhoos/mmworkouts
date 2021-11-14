import React, { useState } from 'react';
import ExerciseResult from './result';
import ExerciseSearch from './search';
import { MultiValue } from 'react-select';
import { getExercises } from '../../services/exercise.service';
import ExerciseOption from '../../types/exerciseOption.type';
import { Exercise } from '../../models/exercise.model';
import '../../styles/exercises.scss';

const Exercises = (): JSX.Element => {
  const [selectedOptions, setSelectedOptions] = useState<ExerciseOption[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const onSelected = (optionsSelected: MultiValue<ExerciseOption>): void => {
    setSelectedOptions(optionsSelected.map((opt: ExerciseOption) => opt));
  };

  const onMenuClose = () => {
    if (selectedOptions.length > 0) {
      getExercises(selectedOptions).then((result: Exercise[]) => {
        setExercises(result);
      });
    } else {
      setExercises([]);
    }
  };

  return (
    <div className="exercises">
      <ExerciseSearch onSelect={onSelected} onMenuClose={onMenuClose} />
      <ExerciseResult exercises={exercises} />
    </div>
  );
};

export default Exercises;
