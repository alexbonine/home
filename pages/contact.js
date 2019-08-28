import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import HomePage from '../layouts/home';
import ContactLinks from '../components/contact/contactLinks';
import panel from '../styles/components/panel';
import { flexCenterAll } from '../styles/flex';
import Colors from '../styles/colors';

const ContactContainer = styled.div`
  height: 80vh;
  width: 80vw;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactSubcontainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const Contact = () => (
  <HomePage>
    <div css={css({ backgroundColor: Colors.green, color: Colors.white }, [panel, flexCenterAll])}>
      <ContactLinks title="Say hello!" />
    </div>
  </HomePage>
);

Contact.meta = {
  title: 'Contact',
  description: 'Alex Bonine Contact', // todo
};

export default Contact;
