import React from 'react';
import HomePage from '../layouts/home';
import Panel from '../components/layouts/panel';

const About = () => (
  <HomePage>
    <Panel css={{ backgroundColor: 'purple', color: 'white' }}>
      <h1>About</h1>
    </Panel>
  </HomePage>
);

About.meta = {
  title: 'About',
  description: 'Alex Bonine About', // todo
};

export default About;
