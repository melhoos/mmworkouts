import React, { useState } from 'react';
import WorkoutFocus from '../../enums/workoutFocus.enum';
import Select, { MultiValue } from 'react-select';
import SelectOption, {
  mapToSelectOptionArrayFromStringArray,
  mapToStringArray,
  mapToSelectOptionArray,
} from '../../types/selectOption.type';
import CheckBtn from '../commons/checkBtn';

interface Props {
  setWorkoutFocuses: (selectedWorkoutFocuses: string[]) => void;
}

const SelectWorkoutFocus = (props: Props): JSX.Element => {
  const [wholeBody, setWholeBody] = useState<boolean>(false);
  const [workoutFocusForSelect, setWorkoutFocusForSelect] = useState<
    SelectOption[]
  >([]);
  const { setWorkoutFocuses } = props;
  const allWorkoutFocusOptions: SelectOption[] =
    mapToSelectOptionArrayFromStringArray(Object.values(WorkoutFocus));

  const onSelectChange = (optionsSelected: MultiValue<SelectOption>) => {
    const selectedWorkoutFocuses = mapToStringArray(optionsSelected);
    setWholeBody(
      selectedWorkoutFocuses.length == allWorkoutFocusOptions.length
    );
    setWorkoutFocuses(selectedWorkoutFocuses);
    setWorkoutFocusForSelect(mapToSelectOptionArray(optionsSelected));
  };

  const onClickWholeBody = () => {
    setWorkoutFocusForSelect(allWorkoutFocusOptions);
    setWorkoutFocuses(mapToStringArray(allWorkoutFocusOptions));
    setWholeBody(true);
  };

  return (
    <div className="workoutFocus">
      <p className="workoutTitle">Hva ønsker du ha fokus på?</p>
      <Select
        isMulti
        options={allWorkoutFocusOptions}
        onChange={onSelectChange}
        value={workoutFocusForSelect}
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
