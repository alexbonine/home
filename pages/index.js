import React from 'react';
import HomePage from '../layouts/home';
import Welcome from '../components/home/welcome';

const Index = () => (
  <HomePage>
    <Welcome />
  </HomePage>
);

Index.meta = {
  description:
    'This is the Amazing Alex Bonine\'s Bodacious website. Alex Bonine has architectured multiple companies\' front-ends in React and Vue and is currently the Lead (read \'only\') Software Engineer at Leap Life.',
  title: 'Alex Bonine\'s Amazing Website',
};

export default Index;
