import React from 'react';
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

interface Props {
  exercises: Exercise[];
}

const Exercises = (props: Props): JSX.Element => {
  const { exercises } = props;

  const renderExercise = (exercise: Exercise, index: number) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <Card variant="outlined">
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
    <Grid container spacing={2} className="exercises">
      {exercises.map((exercise: Exercise, i: number) =>
        renderExercise(exercise, i)
      )}
    </Grid>
  );
};

export default Exercises;
