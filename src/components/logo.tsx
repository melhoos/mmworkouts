import React from 'react';
import logo from '../assets/svgs/logo.svg';
import coverphoto from '../assets/stockphotos/coverphoto.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/logo.scss';

const Logo = (): JSX.Element => {
  return (
    <div className="logo">
      <div className="cover-wrapper">
        <img className="cover-img" src={coverphoto} />
        <FontAwesomeIcon className="arrow-down-icon" icon={faAngleDown} />
      </div>
      <img className="logo-img" src={logo} />
    </div>
  );
};

export default Logo;
