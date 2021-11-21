import React from 'react';
import { Exercise } from '../../types/exercise.type';
import ExerciseCard from './exercisecard';

interface Props {
  exercises: Exercise[];
}

const ExerciseResult = (props: Props): JSX.Element => {
  return (
    <div className="exerciseResult">
      {props.exercises.length > 0 ? (
        props.exercises.map((exercise: Exercise, index: number) => (
          <ExerciseCard exercise={exercise} index={index} />
        ))
      ) : (
        <>Ingen resultater å vise </>
      )}
    </div>
  );
};

export default ExerciseResult;
