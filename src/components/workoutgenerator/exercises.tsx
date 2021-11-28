import React, { useState, useEffect } from 'react';
import { getExercises } from '../../services/exercise.service';
import { Exercise } from '../../types/exercise.type';

interface Props {
  workoutTypes: string[];
  workoutFocuses: string[];
  workoutEquipments: string[];
}

const Exercises = (props: Props): JSX.Element => {
  const { workoutTypes, workoutFocuses, workoutEquipments } = props;
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (
      workoutTypes.length > 0 &&
      workoutFocuses.length > 0 &&
      workoutEquipments.length > 0
    ) {
      getExercises(workoutTypes, workoutFocuses, workoutEquipments)
        .then((result: Exercise[]) => {
          console.log('result: ', result);
          setLoading(true);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    console.log('triggered by props');
  }, [workoutTypes, workoutFocuses, workoutEquipments]);

  return <></>;
};

export default Exercises;
