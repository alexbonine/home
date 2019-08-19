import React from 'react';
import { css } from '@emotion/core';
import HomePage from '../layouts/home';
import panel from '../styles/components/panel';
import { flexCenterAll } from '../styles/flex';

const About = () => (
  <HomePage>
    <div css={css({ backgroundColor: 'green', color: 'white' }, [panel, flexCenterAll])}>
      <h1>About</h1>
    </div>
  </HomePage>
);

About.meta = {
  title: 'About',
  description: 'Alex Bonine About', // todo
};

export default About;
