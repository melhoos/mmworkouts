import React from 'react';
import { Exercise } from '../../types/exercise.type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconSize } from '../../utils/iconSize';
import { faDumbbell, faRunning } from '@fortawesome/free-solid-svg-icons';

interface Props {
  exercise: Exercise;
  index: number;
}

const ExerciseCard = (props: Props): JSX.Element => {
  const { exercise, index } = props;

  const getTypeIcon = (type: string) => {
    const icon = type.toUpperCase() == 'CARDIO' ? faRunning : faDumbbell;
    return <FontAwesomeIcon icon={icon} size={iconSize.xs} />;
  };

  return (
    <div className="exerciseCard" key={index}>
      <div className="exerciseHeading">
        <div className="exerciseName">{exercise.name.toUpperCase()}</div>
        <div className="exerciseType">
          {exercise.type.toUpperCase()} {getTypeIcon(exercise.type)}
        </div>
      </div>
      <div className="exerciseMeta">
        <div>
          UTSTYR:
          {exercise.equipments.map((equipment: string) => (
            <span>{' ' + equipment.toUpperCase() + ','}</span>
          ))}
        </div>
        <div>
          TRENER:
          {exercise.main_muscle_groups.map((mainMuscleGroup: string) => (
            <span>{' ' + mainMuscleGroup.toUpperCase() + ','}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
