import React, { ReactElement } from 'react';
import { rhythm } from '../../utils/typography';
import * as styles from './Intro.module.scss';

const Intro = (): ReactElement => {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(37.5),
        display: 'flex',
      }}
    >
      <div className={styles['intro']}>
        <div className={styles['tagline']}>
          <h1 className="section-title">Keshav</h1>{' '}
          <div className={styles['divider']}></div>{' '}
          <span>software engineer</span>
        </div>
        <p>
          Welcome to my website! I am a software engineer based in Atlanta, GA
          with an interest in interpretable ML models and production ML systems.
        </p>
      </div>
    </div>
  );
};

export default Intro;
