import React from 'react';
import { css } from '@emotion/core';
import HomePage from '../layouts/home';
import panel from '../styles/components/panel';
import { flexCenterAll } from '../styles/flex';

const Portfolio = () => (
  <HomePage>
    <div css={css({ backgroundColor: 'purple', color: 'white' }, [panel, flexCenterAll])}>
      <h1>Portfolio</h1>
    </div>
  </HomePage>
);

Portfolio.meta = {
  title: 'Portfolio',
  description: 'Alex Bonine Portfolio', // todo
};

export default Portfolio;
