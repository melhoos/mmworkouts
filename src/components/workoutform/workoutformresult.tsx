import React, { useEffect, useState } from 'react';
import { Exercise } from '../../types/exercise.type';
import { getExercises } from '../../services/exercise.service';
import Exercises from '../exercises/exercises';
import SelectOption, { mapToStringArray } from '../../types/selectOption.type';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import WorkoutGenerator from '../workoutgenerator/workoutgenerator';

interface Props {
  selectShowExercises: boolean;
  selectGenerateWorkout: boolean;
  workoutTypes: string[];
  workoutFocuses: SelectOption[];
  workoutEquipments: SelectOption[];
}

const WorkoutFormResult = (props: Props): JSX.Element => {
  const {
    selectShowExercises,
    selectGenerateWorkout,
    workoutTypes,
    workoutFocuses,
    workoutEquipments,
  } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [noExerciseFound, setNoExerciseFound] = useState<boolean>(false);

  useEffect(() => {
    if (
      (selectGenerateWorkout || selectShowExercises) &&
      workoutTypes.length > 0 &&
      workoutFocuses.length > 0 &&
      workoutEquipments.length > 0
    ) {
      loadExercises();
    }
  }, [workoutTypes, workoutFocuses, workoutEquipments]);

  useEffect(() => {
    if (
      (selectGenerateWorkout || selectShowExercises) &&
      exercises.length == 0
    ) {
      loadExercises();
    }
  }, [selectGenerateWorkout, selectShowExercises]);

  const loadExercises = () => {
    setLoading(true);
    getExercises(
      workoutTypes,
      mapToStringArray(workoutFocuses),
      mapToStringArray(workoutEquipments)
    )
      .then((result: Exercise[]) => {
        setNoExerciseFound(result.length == 0);
        setExercises(result);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {loading ? (
        <Box sx={{ width: '100%' }}>
          <LinearProgress color="secondary" sx={{ height: '6px' }} />
        </Box>
      ) : noExerciseFound ? (
        <Typography variant="body2" color="text.secondary">
          Ingen øvelser funnet
        </Typography>
      ) : (
        <>
          {selectShowExercises ? <Exercises exercises={exercises} /> : <></>}
          {selectGenerateWorkout ? (
            <WorkoutGenerator exercises={exercises} />
          ) : (
            <></>
          )}
        </>
      )}
    </Box>
  );
};

export default WorkoutFormResult;
