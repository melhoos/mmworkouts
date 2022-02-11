import React, { useState, useEffect } from 'react';
import { getExercises } from '../../services/exercise.service';
import { Exercise } from '../../types/exercise.type';
import Card from '@mui/material/Card';
import WorkoutType from '../../enums/workoutType.enum';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faRunning } from '@fortawesome/free-solid-svg-icons';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

interface Props {
  workoutTypes: string[];
  workoutFocuses: string[];
  workoutEquipments: string[];
}

const Exercises = (props: Props): JSX.Element => {
  const { workoutTypes, workoutFocuses, workoutEquipments } = props;
  const [loading, setLoading] = useState<boolean>(false);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [noExerciseFound, setNoExerciseFound] = useState<boolean>(false);

  useEffect(() => {
    if (
      workoutTypes.length > 0 &&
      workoutFocuses.length > 0 &&
      workoutEquipments.length > 0
    ) {
      setLoading(true);
      getExercises(workoutTypes, workoutFocuses, workoutEquipments)
        .then((result: Exercise[]) => {
          setNoExerciseFound(result.length == 0);
          setExercises(result);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [workoutTypes, workoutFocuses, workoutEquipments]);

  const renderExercise = (exercise: Exercise, index: number) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card key={index} variant="outlined">
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: '#12535a', width: 35, height: 35 }}
                aria-label={exercise.type}
              >
                <FontAwesomeIcon
                  icon={
                    exercise.type == WorkoutType.CARDIO ? faRunning : faDumbbell
                  }
                />
              </Avatar>
            }
            title={exercise.name.toLocaleUpperCase()}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {exercise.main_muscle_groups.join(', ')}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {exercise.equipments.join(', ')}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
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
        <Grid container spacing={2} className="exercises">
          {exercises.map((exercise: Exercise, i: number) =>
            renderExercise(exercise, i)
          )}
        </Grid>
      )}
    </Box>
  );
};

export default Exercises;
