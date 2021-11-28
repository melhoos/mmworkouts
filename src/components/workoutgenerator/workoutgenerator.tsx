import React, { useState } from 'react';
import '../../styles/workoutgenerator.scss';
import SelectWorkoutType from './selectworkouttype';
import SelectWorkoutFocus from './selectworkoutfocus';
import SelectWorkoutEquipments from './selectworkoutequipments';
import SelectWorkoutDecision from './selectworkoutdecision';
import Exercises from './exercises';

const WorkoutGenerator = (): JSX.Element => {
  const [workoutTypes, setWorkoutTypes] = useState<string[]>([]);
  const [workoutFocuses, setWorkoutFocuses] = React.useState<string[]>([]);
  const [workoutEquipments, setWorkoutEquipments] = React.useState<string[]>(
    []
  );
  const [selectShowExercises, setSelectShowExercises] =
    useState<boolean>(false);
  const [selectGenerateWorkout, setSelectGenerateWorkout] =
    useState<boolean>(false);

  const onSelectShowExercises = () => {
    setSelectGenerateWorkout(false);
    setSelectShowExercises(true);
  };

  const onSelectGenerateWorkout = () => {
    setSelectGenerateWorkout(true);
    setSelectShowExercises(false);
  };

  const renderWorkoutDecision = () => {
    return workoutTypes.length > 0 &&
      workoutFocuses.length > 0 &&
      workoutEquipments.length > 0 ? (
      <SelectWorkoutDecision
        selectShowExercises={selectShowExercises}
        onSelectShowExercises={onSelectShowExercises}
        selectGenerateWorkout={selectGenerateWorkout}
        onSelectGenerateWorkout={onSelectGenerateWorkout}
      />
    ) : (
      <></>
    );
  };

  const renderExercisesOrWorkout = () => {
    if (selectShowExercises) {
      return (
        <Exercises
          workoutTypes={workoutTypes}
          workoutFocuses={workoutFocuses}
          workoutEquipments={workoutEquipments}
        />
      );
    } else if (selectGenerateWorkout) {
      return <>'workout her'</>;
    }
  };

  return (
    <div className="workoutGenerator">
      <SelectWorkoutType
        selectedWorkoutTypes={workoutTypes}
        setSelectedWorkoutTypes={setWorkoutTypes}
      />
      <SelectWorkoutFocus setWorkoutFocuses={setWorkoutFocuses} />
      <SelectWorkoutEquipments setWorkoutEquipments={setWorkoutEquipments} />
      {renderWorkoutDecision()}
      {renderExercisesOrWorkout()}
    </div>
  );
};

export default WorkoutGenerator;
