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

  const onClickSearch = () => {
    getExercises(selectedOptions).then((result: Exercise[]) => {
      setExercises(result);
      //console.log('result: ', result);
    });
  };

  const onSelected = (optionsSelected: MultiValue<ExerciseOption>): void => {
    setSelectedOptions(optionsSelected.map((opt: ExerciseOption) => opt));
  };
  return (
    <div className="exercises">
      <ExerciseSearch onSelect={onSelected} />
      <button onClick={onClickSearch}> Søk! </button>
      <ExerciseResult />
    </div>
  );
};

export default Exercises;
