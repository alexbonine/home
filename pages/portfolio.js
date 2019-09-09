import React from 'react';
import { css } from '@emotion/core';
import HomePage from '../layouts/home';
import Panel from '../components/layouts/panel';
import colors from '../styles/colors';

const Portfolio = () => (
  <HomePage>
    <Panel centerHorizontal centerVertical backgroundColor={colors.purple}>
      <h1 css={css({ color: 'white' })}>Portfolio</h1>
    </Panel>
  </HomePage>
);

Portfolio.meta = {
  title: 'Portfolio',
  description: 'Alex Bonine Portfolio', // todo
};

export default Portfolio;
