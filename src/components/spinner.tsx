import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconSize } from '../utils/iconSize';
import {
  faDumbbell,
  faRunning,
  faBiking,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/spinner.scss';

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const getRandomIcon = () => {
  const icons = [faDumbbell, faRunning, faBiking];
  const randomNum = getRandomInt(icons.length);
  return icons[randomNum];
};

interface Props {
  iconSize: iconSize;
  spin?: boolean;
}

const Spinner = ({ iconSize, spin = true }: Props) => {
  return (
    <div className="spinner">
      <FontAwesomeIcon
        className="spinner-icon"
        icon={getRandomIcon()}
        spin={spin}
        size={iconSize}
      />
    </div>
  );
};

export default Spinner;
