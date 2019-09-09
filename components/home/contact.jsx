import React from 'react';
import ContactLinks from '../contact/contactLinks';
import Panel from '../layouts/panel';

const Contact = () => {
  return (
    <Panel centerHorizontal paddingNavbar>
      <ContactLinks subtitle="Say hello!" title="Thanks for making it this far." />
    </Panel>
  );
};

export default Contact;
