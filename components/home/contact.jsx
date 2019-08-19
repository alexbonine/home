import React from 'react';
import styled from '@emotion/styled';
// import { css } from '@emotion/core';
import Colors from '../../styles/colors';
import panel from '../../styles/components/panel';
import { flexCenterColumn } from '../../styles/flex';

const PanelContainer = styled.div`
  padding: 10vh 0 0 0;
  position: relative;
  background: ${Colors.blue};
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 4em;
  font-family: 'Playfair Display', serif;
  color: ${Colors.textLight};
  margin-bottom: 16px;
`;

const Text = styled.p`
  font-size: 2em;
  font-family: 'Playfair Display', serif;
  color: ${Colors.textLight};
`;

const Contact = () => {
  return (
    <PanelContainer css={[panel, flexCenterColumn]}>
      <Title>Contact</Title>
      <ContactContainer>
        <Text>Some contact info</Text>
      </ContactContainer>
    </PanelContainer>
  );
};

export default Contact;
