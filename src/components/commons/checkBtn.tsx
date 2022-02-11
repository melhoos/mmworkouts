import React from 'react';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface Props {
  label: string;
  isSelected: boolean;
  onClickF: () => void;
  isDisabled: boolean;
}

const CheckBtn = (props: Props): JSX.Element => {
  const { label, isSelected, onClickF, isDisabled } = props;
  return (
    <Button
      className="checkBtn"
      variant={isSelected ? 'contained' : 'outlined'}
      onClick={onClickF}
      disabled={isDisabled}
      color="secondary"
    >
      <span className="label">{label}</span>
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

export default CheckBtn;
