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
        <p>Welcome to my website! I'm a software engineer that's:</p>
        <ul>
          <li>
            Built pre-processing pipelines for messy protein structures{' '}
            <a href="">like this one</a>, trained ML models to{' '}
            <a href="">see and understand</a> 3D structure data like a chemist,
            and packaged predictions in to an industry leading drug discovery
            platform at <a href="https://gene2lead.com/">Gene2Lead, Ltd.</a>
          </li>
          <li>
            Currently: developing the software infrastructure to scale{' '}
            <a href="https://www.matmerize.com/">Matmerize's</a> flagship R&D
            platform used by 10+ customers for AI-assisted industrial material
            design.
          </li>
        </ul>
        <p>
          I earned my BSc. in Computer Science from the University of Toronto,
          and am currently studying AI and systems at Georgia Tech.
        </p>
        <p>Hobbies: swimming, public speaking, rock music</p>
      </div>
    </div>
  );
};

export default Intro;
