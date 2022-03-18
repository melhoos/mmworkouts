import React, { useState } from 'react';
import '../styles/main.scss';
import SelectWorkoutDecision from './workoutform/selectworkoutdecision';
import SelectOption from '../types/selectOption.type';
import WorkoutForm from './workoutform/workoutform';
import WorkoutFormResult from './workoutform/workoutformresult';

const formIsValid = (
  types: string[],
  focuses: SelectOption[],
  equipments: SelectOption[]
): boolean => {
  return types.length > 0 && focuses.length > 0 && equipments.length > 0;
};

const Main = (): JSX.Element => {
  const [workoutTypes, setWorkoutTypes] = useState<string[]>([]);
  const [workoutFocuses, setWorkoutFocuses] = useState<SelectOption[]>([]);
  const [workoutEquipments, setWorkoutEquipments] = useState<SelectOption[]>(
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

  return (
    <div className="main">
      <WorkoutForm
        workoutTypes={workoutTypes}
        setWorkoutTypes={setWorkoutTypes}
        workoutFocuses={workoutFocuses}
        setWorkoutFocuses={setWorkoutFocuses}
        workoutEquipments={workoutEquipments}
        setWorkoutEquipments={setWorkoutEquipments}
      />
      {formIsValid(workoutTypes, workoutFocuses, workoutEquipments) ? (
        <>
          <SelectWorkoutDecision
            selectShowExercises={selectShowExercises}
            onSelectShowExercises={onSelectShowExercises}
            selectGenerateWorkout={selectGenerateWorkout}
            onSelectGenerateWorkout={onSelectGenerateWorkout}
          />
          <WorkoutFormResult
            selectShowExercises={selectShowExercises}
            selectGenerateWorkout={selectGenerateWorkout}
            workoutTypes={workoutTypes}
            workoutFocuses={workoutFocuses}
            workoutEquipments={workoutEquipments}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
