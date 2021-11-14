import React from 'react';
import Select from 'react-select';
import { MultiValue } from 'react-select';
import ExerciseOption from '../../types/exerciseOption.type';
import exerciseOptions from '../../utils/exerciseOptions';

interface Props {
  onSelect: (optionsSelected: MultiValue<ExerciseOption>) => void;
}

const ExerciseSearch = (props: Props): JSX.Element => {
  return (
    <Select
      className="exerciseSearch"
      closeMenuOnSelect={false}
      getOptionLabel={(opt: ExerciseOption) => opt.label}
      getOptionValue={(opt: ExerciseOption) => opt.value}
      options={exerciseOptions}
      onChange={props.onSelect}
      isMulti
    />
  );
};

export default ExerciseSearch;
