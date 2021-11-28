import React, { useState } from 'react';
import Button from '@mui/material/Button';
import WorkoutType from '../../enums/workoutType.enum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import CheckBtn from '../commons/checkBtn';

interface Props {
  selectedWorkoutTypes: string[];
  setSelectedWorkoutTypes: (selectedWorkoutTypes: string[]) => void;
}

const SelectWorkoutType = (props: Props): JSX.Element => {
  const { selectedWorkoutTypes, setSelectedWorkoutTypes } = props;
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const workoutTypes: string[] = Object.values(WorkoutType);

  const onClickWorkoutTypeBtn = (workoutType: string) => {
    if (selectedWorkoutTypes.indexOf(workoutType) >= 0) {
      setSelectedWorkoutTypes(
        selectedWorkoutTypes.filter((wt) => wt != workoutType)
      );
    } else {
      setSelectedWorkoutTypes([...selectedWorkoutTypes, workoutType]);
    }
  };

  const workoutTypeBtn = (workoutType: string) => {
    const isSelected: boolean = selectedWorkoutTypes.includes(workoutType);
    return (
      <Button
        key={workoutType}
        className="checkBtn"
        variant={isSelected ? 'contained' : 'outlined'}
        onClick={() => onClickWorkoutTypeBtn(workoutType)}
        disabled={selectAll}
      >
        <span className="label">{workoutType}</span>
        <span className="checkIcon">
          {isSelected ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <span className="iconPlaceholder"></span>
          )}
        </span>
      </Button>
    );
  };

  const onClickSelectAllWorkoutTypesBtn = () => {
    setSelectAll(!selectAll);
    setSelectedWorkoutTypes(workoutTypes);
  };

  const selectAllWorkoutTypesBtn = () => {
    return (
      <CheckBtn
        label={'Begge'}
        isSelected={selectAll}
        onClickF={onClickSelectAllWorkoutTypesBtn}
        isDisabled={false}
      />
    );
  };

  return (
    <div className="workoutTypes">
      <p className="workoutTitle">Hva slags type økt vil du trene?</p>
      {workoutTypes.map((wt) => workoutTypeBtn(wt))}
      {selectAllWorkoutTypesBtn()}
    </div>
  );
};

export default SelectWorkoutType;
