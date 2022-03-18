import React, { useState } from 'react';
import WorkoutFocus from '../../enums/workoutFocus.enum';
import Select, { MultiValue } from 'react-select';
import SelectOption, {
  mapToSelectOptionArrayFromStringArray,
  mapToSelectOptionArray,
} from '../../types/selectOption.type';
import CheckBtn from '../commons/checkBtn';

interface Props {
  workoutFocuses: SelectOption[];
  setWorkoutFocuses: (selectedWorkoutFocuses: SelectOption[]) => void;
}

const SelectWorkoutFocus = (props: Props): JSX.Element => {
  const [wholeBody, setWholeBody] = useState<boolean>(false);
  const { workoutFocuses, setWorkoutFocuses } = props;
  const allWorkoutFocusOptions: SelectOption[] =
    mapToSelectOptionArrayFromStringArray(Object.values(WorkoutFocus));

  const onSelectChange = (optionsSelected: MultiValue<SelectOption>) => {
    const selectedWorkoutFocuses = mapToSelectOptionArray(optionsSelected);
    setWholeBody(
      selectedWorkoutFocuses.length == allWorkoutFocusOptions.length
    );
    setWorkoutFocuses(selectedWorkoutFocuses);
  };

  const onClickWholeBody = () => {
    setWorkoutFocuses(allWorkoutFocusOptions);
    setWholeBody(true);
  };

  return (
    <div className="workoutFocus">
      <p className="workoutTitle">Hva ønsker du ha fokus på?</p>
      <Select
        isMulti
        options={allWorkoutFocusOptions}
        onChange={onSelectChange}
        value={workoutFocuses}
      />
      <CheckBtn
        label="Hele kroppen"
        isSelected={wholeBody}
        onClickF={onClickWholeBody}
        isDisabled={false}
      />
    </div>
  );
};

export default SelectWorkoutFocus;
