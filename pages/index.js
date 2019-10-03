import React from 'react';
import HomePage from '../layouts/home';
import Welcome from '../components/home/welcome';
import Skills from '../components/home/skills';
import Work from '../components/home/work';
import Contact from '../components/home/contact';

const Index = () => (
  <HomePage>
    <Welcome />
    <Skills />
    <Work />
    <Contact />
  </HomePage>
);

Index.meta = {
  description:
    "This is the Amazing Alex Bonine's Bodacious website. Alex Bonine has architected multiple companies' front-ends in React and Vue and is currently the Lead (read 'only') Software Engineer at Leap Life.",
  title: "Alex Bonine's Amazing Website",
};

export default Index;
