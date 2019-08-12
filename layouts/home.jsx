import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/layouts/header';

const Home = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
  </React.Fragment>
);

Home.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;
