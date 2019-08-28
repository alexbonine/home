import React from 'react';
import styled from '@emotion/styled';
import ContactLinks from '../contact/contactLinks';
import Colors from '../../styles/colors';
import panel from '../../styles/components/panel';
import { flexCenterColumn } from '../../styles/flex';

const PanelContainer = styled.div`
  padding: 10vh 0 0 0;
  position: relative;
  background: ${Colors.blue};
`;

const Contact = () => {
  return (
    <PanelContainer css={[panel, flexCenterColumn]}>
      <ContactLinks subtitle="Say hello!" title="Thanks for making it this far." />
    </PanelContainer>
  );
};

export default Contact;
