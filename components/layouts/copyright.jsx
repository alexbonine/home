import React from 'react';
import styled from '@emotion/styled';
import Colors from '../../styles/colors';

const CopyrightContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  margin: 8px 0;
  width: 100%;
`;

const CopyrightText = styled.p`
  color: ${Colors.white};
  /* text-align: center; */
`;

const year = new Date().getFullYear();

const Copyright = () => (
  <CopyrightContainer>
    <CopyrightText>&#169; {year} Alex Bonine</CopyrightText>
  </CopyrightContainer>
);

export default Copyright;
