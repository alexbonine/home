import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import App from '../styles/constants/app';
import { mqDesktop, mqTablet } from '../styles/screenSize';
import Header from '../components/layouts/header';
import Copyright from '../components/layouts/copyright';

const HomeContainer = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  padding: ${({ gutters }) => `0 ${gutters ? App.gutters.mobile : 0}`};

  ${mqTablet} {
    padding: ${({ gutters }) => `0 ${gutters ? App.gutters.tablet : 0}`};
  }

  ${mqDesktop} {
    padding: ${({ gutters }) => `0 ${gutters ? App.gutters.desktop : 0}`};
  }
`;

const Home = ({ children, gutters }) => (
  <HomeContainer gutters={gutters}>
    <Header />
    {children}
    <Copyright />
  </HomeContainer>
);

Home.propTypes = {
  children: PropTypes.node.isRequired,
  gutters: PropTypes.bool,
};

Home.defaultProps = {
  gutters: false,
};

export default Home;
