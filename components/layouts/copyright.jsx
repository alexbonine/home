import styled from '@emotion/styled';
import HomepageStyles from '../../styles/components/homepage';
import App from '../../styles/constants/app';

const CopyrightContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  bottom: 0;
  margin: ${App.half} 0;
  width: 100%;
`;

const CopyrightText = styled.p`
  color: ${HomepageStyles.textMain};
  /* text-align: center; */
`;

const year = new Date().getFullYear();

const Copyright = () => (
  <CopyrightContainer>
    <CopyrightText>&#169; {year} Alex Bonine</CopyrightText>
  </CopyrightContainer>
);

export default Copyright;
