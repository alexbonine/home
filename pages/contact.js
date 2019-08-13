import React from 'react';
import HomePage from '../layouts/home';
import Panel from '../components/layouts/panel';

const Contact = () => (
  <HomePage>
    <Panel css={{ backgroundColor: 'blue', color: 'white' }}>
      <h1>Contact</h1>
    </Panel>
  </HomePage>
);

Contact.meta = {
  title: 'Contact',
  description: 'Alex Bonine Contact', // todo
};

export default Contact;
