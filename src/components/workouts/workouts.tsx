import React from 'react';
import '../../styles/workouts.scss';

const Workouts = (): JSX.Element => {
  return (
    <div className="workouts">
      <ul>
        <li>AMRAP</li>
        <li>EMOM</li>
        <li>Circle</li>
        <li>Blocks</li>
        <li>You go I go*</li>
      </ul>
    </div>
  );
};

export default Workouts;
