import styled from '@emotion/styled';
import HomePage from '@/layouts/home';
import Colors from '@/styles/colors';
import App from '@/styles/constants/app';
import { mqTablet } from '@/styles/screenSize';
import Leaplife from '@/components/portfolio/leaplife';
import Marketo from '@/components/portfolio/marketo';
import Toutapp from '@/components/portfolio/toutapp';
import Coyote from '@/components/portfolio/coyote';
import RockwellCollins from '@/components/portfolio/rockwellCollins';
// import Isu from '@/components/portfolio/isu';
// import Vt from '@/components/portfolio/vt';

const PortfolioContainer = styled.div`
  max-width: ${App.maxWidth};
  padding: ${App.headerHeight} 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ScrollContainer = styled.ul`
  overflow-y: auto;
  flex: 1 1 auto;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${Colors.textLight};
  margin-bottom: ${App.full};
  display: none;

  ${mqTablet} {
    display: block;
  }
`;

const Portfolio = () => (
  <HomePage gutters>
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
