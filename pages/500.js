import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'next/image';
import HomePage from '../layouts/home';
import RaccoonImg from '../public/img/raccoon-archnemesis.jpeg';
import Colors from '../styles/colors';
import App from '../styles/constants/app';

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 60px;
  color: ${Colors.white};
  background: green;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${Colors.textLight};
  margin-bottom: ${App.double};
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: ${Colors.textLight};
  margin-top: ${App.double};
  text-align: center;
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const Error500 = () => (
  <HomePage>
    <Container>
      <Title>Server Error</Title>
      <ImageContainer>
        <Image src={RaccoonImg} alt="Evil Raccoon" />
      </ImageContainer>
      <Subtitle>Something I did broke the backend. Whoops.</Subtitle>
    </Container>
  </HomePage>
);

Error500.propTypes = {
  statusCode: PropTypes.number,
};

Error500.defaultProps = {
  statusCode: null,
};

Error500.meta = {
  title: '500 Error',
  description: "Alex Bonine doesn't make mistakes so...",
};

export default Error500;
