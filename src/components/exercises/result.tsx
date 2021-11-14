import React from 'react';
import { Exercise } from '../../models/exercise.model';

interface Props {
  exercises: Exercise[];
}

const ExerciseResult = (props: Props): JSX.Element => {
  const exerciseResultCard = (exercise: Exercise, index: number) => {
    return (
      <div className="exerciseCard" key={index}>
        <div>{exercise.name}</div>
        <div>{exercise.type}</div>
        <div>
          {exercise.equipments.map(
            (equipment: string) => `${equipment.toUpperCase()}, `
          )}
        </div>
        <div>
          {exercise.main_muscle_groups.map(
            (mainMuscleGroup: string) => `${mainMuscleGroup.toUpperCase()}, `
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="exerciseResult">
      {props.exercises.map((exercise: Exercise, index: number) =>
        exerciseResultCard(exercise, index)
      )}
    </div>
  );
};

export default ExerciseResult;
