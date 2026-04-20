import React, { ReactElement } from 'react';

import SEO from '../SEO/SEO';

import Intro from '../Intro/Intro';
import Format from '../Format/Format';

const Homepage: React.FC = (): ReactElement => {
  return (
    <Format title={'Home'}>
      <SEO title="Home" />
      <Intro />
      <div className="resume"></div>
    </Format>
  );
};

export default Homepage;
