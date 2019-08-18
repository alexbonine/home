import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/layouts/header';

const Home = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

Home.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;
