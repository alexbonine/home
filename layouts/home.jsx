import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import Meta from '../components/layouts/meta';
import Header from '../components/layouts/header';
import GlobalStyles from '../styles/global';

const Home = ({ children }) => (
  <React.Fragment>
    <Meta />
    <Global styles={GlobalStyles} />
    {/* <Header /> */}
    {children}
  </React.Fragment>
);

Home.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;
