import React, { useState } from 'react';
import Select from 'react-select';
import { MultiValue } from 'react-select';
import ExerciseOption from '../../types/exerciseOption.type';
import exerciseOptions from '../../utils/exerciseOptions';
import { addExercise } from '../../services/exercise.service';

const AddExercise = (): JSX.Element => {
  const [exerciseName, setExerciseName] = useState<string>('');
  const [selectedExerciseOptions, setSelectedExerciseOptions] = useState<
    ExerciseOption[]
  >([]);

  const onSelect = (optionsSelected: MultiValue<ExerciseOption>) => {
    setSelectedExerciseOptions(
      optionsSelected.map((opt: ExerciseOption) => opt)
    );
  };

  const onClick = () => {
    addExercise(exerciseName, selectedExerciseOptions).then(
      (result: boolean) => {
        if (result) {
          setExerciseName('');
        }
      }
    );
  };

  return (
    <>
      <h1>Legg til øvelse:</h1>
      <label>
        Navn:
        <input
          type="text"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
        />
      </label>
      <Select
        className="exerciseSearch"
        closeMenuOnSelect={false}
        getOptionLabel={(opt: ExerciseOption) => opt.label}
        getOptionValue={(opt: ExerciseOption) => opt.value}
        options={exerciseOptions}
        onChange={onSelect}
        isClearable
        isMulti
      />
      <button onClick={onClick}>Lagre</button>
    </>
  );
};

export default AddExercise;
