import React from 'react';
import Button from '@mui/material/Button';

interface Props {
  selectShowExercises: boolean;
  onSelectShowExercises: () => void;
  selectGenerateWorkout: boolean;
  onSelectGenerateWorkout: () => void;
}

const SelectWorkoutDecision = (props: Props): JSX.Element => {
  const {
    selectShowExercises,
    onSelectShowExercises,
    selectGenerateWorkout,
    onSelectGenerateWorkout,
  } = props;

  return (
    <div className="workoutDecision">
      <Button
        className="checkBtn"
        variant={selectShowExercises ? 'contained' : 'outlined'}
        onClick={onSelectShowExercises}
        color="primary"
      >
        <span className="label">{'Vis meg øvelser'}</span>
      </Button>
      <Button
        className="checkBtn"
        variant={selectGenerateWorkout ? 'contained' : 'outlined'}
        onClick={onSelectGenerateWorkout}
        color="primary"
      >
        <span className="label">{'Lag en økt'}</span>
      </Button>
    </div>
  );
};

export default SelectWorkoutDecision;
