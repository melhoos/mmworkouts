import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import FadeInSection from '../utils/fadeInSection';
import '../styles/actions.scss';

const Actions = (): JSX.Element => {
  return (
    <div className="actions">
      <div className="actions-content">
        <FadeInSection>
          <a className="panel first">
            <h2>Find exercises</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <FontAwesomeIcon className="arrow-right-icon" icon={faAngleRight} />
          </a>
        </FadeInSection>
        <FadeInSection>
          <a className="panel middel">
            <h2>Exercise generator</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <FontAwesomeIcon className="arrow-right-icon" icon={faAngleRight} />
          </a>
        </FadeInSection>
        <FadeInSection>
          <a className="panel last">
            <h2>What's next?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <FontAwesomeIcon className="arrow-right-icon" icon={faAngleRight} />
          </a>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Actions;
