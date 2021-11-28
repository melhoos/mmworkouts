import React, { useState } from 'react';
import WorkoutEquipment from '../../enums/workoutEquipments.enum';
import Select, { MultiValue } from 'react-select';
import SelectOption, {
  mapToSelectOptionArrayFromStringArray,
  mapToStringArray,
  mapToSelectOptionArray,
} from '../../types/selectOption.type';
import CheckBtn from '../commons/checkBtn';

interface Props {
  setWorkoutEquipments: (selectedWorkoutEquipments: string[]) => void;
}

const SelectWorkoutEquipments = (props: Props): JSX.Element => {
  const { setWorkoutEquipments } = props;
  const [workoutEquipmentsForSelect, setWorkoutEquipmentsForSelect] = useState<
    SelectOption[]
  >([]);
  const [noEquipments, setNoEquipments] = useState<boolean>(false);
  const allWorkoutEquipmentOptions: SelectOption[] =
    mapToSelectOptionArrayFromStringArray(Object.values(WorkoutEquipment));

  const onSelectChange = (optionsSelected: MultiValue<SelectOption>) => {
    const selectedWorkoutEquipments = mapToStringArray(optionsSelected);
    setWorkoutEquipmentsForSelect(mapToSelectOptionArray(optionsSelected));
    setWorkoutEquipments(selectedWorkoutEquipments);
  };

  const onClickNoEquipments = () => {
    setNoEquipments(!noEquipments);
    setWorkoutEquipments(noEquipments ? [] : ['ingen utstyr']);
    setWorkoutEquipmentsForSelect([]);
  };

  return (
    <div className="workoutEquipments">
      <p className="workoutTitle">Har du utstyr tilgjengelig?</p>
      <Select
        isMulti
        options={allWorkoutEquipmentOptions}
        onChange={onSelectChange}
        isDisabled={noEquipments}
        value={workoutEquipmentsForSelect}
      />
      <CheckBtn
        label="Ingen utstyr"
        isSelected={noEquipments}
        onClickF={onClickNoEquipments}
        isDisabled={false}
      />
    </div>
  );
};

export default SelectWorkoutEquipments;
