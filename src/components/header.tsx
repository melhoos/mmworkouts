import React from 'react';
import logo from '../assets/svgs/logo.svg';

const Header = (): JSX.Element => {
  return (
    <header>
      <img src={logo} alt="mm.workouts logo" />
    </header>
  );
};

export default Header;
