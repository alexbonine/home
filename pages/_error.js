import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import HomePage from '../layouts/home';

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 60px;
  color: white;
  background: green;
`;

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    return { statusCode: (res && res.statusCode) || (err && err.statusCode) || null };
  }

  getError() {
    const { statusCode } = this.props;
    if (statusCode === 404) {
      return {
        title: 'Page Not Found',
        text: "I'm sorry but the page you are looking for doesn't seem to exist.",
      };
    } else if (statusCode === 500) {
      return {
        error: '',
        title: 'Server Error',
        text: 'Something I did broke the backend. Whoops.',
      };
    }

    return {
      error: `Status code was ${statusCode}`,
      title: 'Client Error',
      text: 'Something  I did broke the front-end. Whoops',
    };
  }

  render() {
    const { error, text, title } = this.getError();

    return (
      <HomePage>
        <Container>
          <h1>{title}</h1>
          <p>{text}</p>
          {error && <p>{error}</p>}
        </Container>
      </HomePage>
    );
  }
}

Error.propTypes = {
  statusCode: PropTypes.number,
};

Error.defaultProps = {
  statusCode: null,
};

Error.meta = {
  title: 'Error',
  description: "Alex Bonine doesn't make mistakes so...",
};

export default Error;
