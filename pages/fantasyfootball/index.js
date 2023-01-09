import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const FantasyFootballContainer = styled.div`
  background: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  height: 100vh;
  width: 100vw;
`;

let globalUser = null;

const FantasyFootball = ({ isFromServer, user }) => {
  useEffect(() => {
    if (isFromServer) {
      globalUser = user;
    }
  });
  return (
    <FantasyFootballContainer>
      {user ? JSON.stringify(user) : <a href="/auth/yahoo">Sign On with Yahoo</a>}
    </FantasyFootballContainer>
  );
};

FantasyFootball.getInitialProps = async (ctx) => {
  const isFromServer = !!ctx.req;

  const user = (ctx.req && ctx.req.user) || globalUser;

  // if (isFromServer && user) {
  //   user._id = user._id.toString();
  // }

  return { user, isFromServer };
};

FantasyFootball.propTypes = {
  isFromServer: PropTypes.bool,
  user: PropTypes.object, // update with shape
};

FantasyFootball.defaultProps = {
  isFromServer: false,
  user: null,
};

FantasyFootball.meta = {
  description: 'Analyze Your Weekly Fantasy Football Match-ups',
  title: 'LemurDev Fantasy Football Analyzer',
};

export default FantasyFootball;
