import React from 'react';
import styled from '@emotion/styled';
import HomePage from '../layouts/home';
import Colors from '../styles/colors';
import App from '../styles/constants/app';
import Leaplife from '../components/portfolio/leaplife';
import Marketo from '../components/portfolio/marketo';
import Toutapp from '../components/portfolio/toutapp';
import Coyote from '../components/portfolio/coyote';
import RockwellCollins from '../components/portfolio/rockwellCollins';
// import Isu from '../components/portfolio/isu';
// import Vt from '../components/portfolio/vt';

const PortfolioContainer = styled.div`
  max-width: ${App.maxWidth};
  padding: ${App.headerHeight} 0;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ScrollContainer = styled.ul`
  overflow: auto;
  flex: 1 1 auto;
`;

const Title = styled.h3`
  font-size: 3em;
  color: ${Colors.textLight};
  margin-bottom: 16px;
`;

const Portfolio = () => (
  <HomePage>
    <PortfolioContainer>
      <Title>Portfolio</Title>
      <ScrollContainer>
        <Leaplife isFirst />
        <Marketo />
        <Toutapp />
        <Coyote />
        <RockwellCollins isLast />
      </ScrollContainer>
    </PortfolioContainer>
  </HomePage>
);

Portfolio.meta = {
  title: 'Portfolio',
  description: 'Alex Bonine Portfolio', // todo
};

export default Portfolio;
