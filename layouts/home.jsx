import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/layouts/header';
import Copyright from '../components/layouts/copyright';

const Home = ({ children }) => (
  <>
    <Header />
    {children}
    <Copyright />
  </>
);

Home.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Home;
