import React from 'react';
import HomePage from '../layouts/home';
import Panel from '../components/layouts/panel';

const Portfolio = () => (
  <HomePage>
    <Panel css={{ backgroundColor: 'purple', color: 'white' }}>
      <h1>Portfolio</h1>
    </Panel>
  </HomePage>
);

Portfolio.meta = {
  title: 'Portfolio',
  description: 'Alex Bonine Portfolio', // todo
};

export default Portfolio;
