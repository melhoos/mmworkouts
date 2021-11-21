import React, { useState } from 'react';
import '../../styles/workoutgenerator.scss';
import SelectWorkoutType from './selectworkouttype';
import SelectWorkoutFocus from './selectworkoutfocus';
import SelectWorkoutEquipments from './selectworkoutequipments';
import SelectWorkoutDecision from './selectworkoutdecision';

const WorkoutGenerator = (): JSX.Element => {
  const [selectedWorkoutTypes, setSelectedWorkoutTypes] = useState<string[]>(
    []
  );
  const [workoutFocuses, setWorkoutFocuses] = React.useState<string[]>([]);
  const [workoutEquipments, setWorkoutEquipments] = React.useState<string[]>(
    []
  );

  const renderWorkouutDecision = () => {
    console.log('hallo?');
    return selectedWorkoutTypes.length > 0 && workoutFocuses.length > 0 ? (
      <SelectWorkoutDecision />
    ) : (
      <></>
    );
  };

  return (
    <div className="workoutGenerator">
      <SelectWorkoutType
        selectedWorkoutTypes={selectedWorkoutTypes}
        setSelectedWorkoutTypes={setSelectedWorkoutTypes}
      />
      <SelectWorkoutFocus setWorkoutFocuses={setWorkoutFocuses} />
      <SelectWorkoutEquipments setWorkoutEquipments={setWorkoutEquipments} />
      {renderWorkouutDecision()}
    </div>
  );
};

export default WorkoutGenerator;
