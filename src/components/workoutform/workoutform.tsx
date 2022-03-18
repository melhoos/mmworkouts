import React from 'react';
import SelectWorkoutType from './selectworkouttype';
import SelectWorkoutFocus from './selectworkoutfocus';
import SelectWorkoutEquipments from './selectworkoutequipments';
import SelectOption from '../../types/selectOption.type';

interface Props {
  workoutTypes: string[];
  setWorkoutTypes: (workoutTypes: string[]) => void;
  workoutFocuses: SelectOption[];
  setWorkoutFocuses: (workoutFocuses: SelectOption[]) => void;
  workoutEquipments: SelectOption[];
  setWorkoutEquipments: (workoutEquipments: SelectOption[]) => void;
}

const WorkoutForm = (props: Props): JSX.Element => {
  const {
    workoutTypes,
    setWorkoutTypes,
    workoutFocuses,
    setWorkoutFocuses,
    workoutEquipments,
    setWorkoutEquipments,
  } = props;

  return (
    <div className="workoutform">
      <SelectWorkoutType
        selectedWorkoutTypes={workoutTypes}
        setSelectedWorkoutTypes={setWorkoutTypes}
      />
      <SelectWorkoutFocus
        workoutFocuses={workoutFocuses}
        setWorkoutFocuses={setWorkoutFocuses}
      />
      <SelectWorkoutEquipments
        workoutEquipments={workoutEquipments}
        setWorkoutEquipments={setWorkoutEquipments}
      />
    </div>
  );
};

export default WorkoutForm;
