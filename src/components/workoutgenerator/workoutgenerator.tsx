import React, { useState } from 'react';
import '../../styles/workoutgenerator.scss';
import SelectWorkoutType from './selectworkouttype';
import SelectWorkoutFocus from './selectworkoutfocus';
import SelectWorkoutEquipments from './selectworkoutequipments';
import SelectWorkoutDecision from './selectworkoutdecision';
import Exercises from '../exercises/exercises';

const formIsValid = (
  types: string[],
  focuses: string[],
  equipments: string[]
): boolean => {
  return types.length > 0 && focuses.length > 0 && equipments.length > 0;
};

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
    return formIsValid(workoutTypes, workoutFocuses, workoutEquipments) ? (
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
    if (!formIsValid(workoutTypes, workoutFocuses, workoutEquipments)) {
      return <></>;
    }

    if (selectShowExercises) {
      return (
        <Exercises
          workoutTypes={workoutTypes}
          workoutFocuses={workoutFocuses}
          workoutEquipments={workoutEquipments}
        />
      );
    } else if (selectGenerateWorkout) {
      return <>kommer økt her</>;
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
