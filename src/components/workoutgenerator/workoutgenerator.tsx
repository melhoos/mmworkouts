import React from 'react';
import { Exercise } from '../../types/exercise.type';

interface Props {
  exercises: Exercise[];
}

const WorkoutGenerator = (props: Props): JSX.Element => {
  const { exercises } = props;
  return <>kommer økter her</>;
};

export default WorkoutGenerator;
