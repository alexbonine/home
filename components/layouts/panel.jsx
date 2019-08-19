import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';

const PanelStyled = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto;
  min-height: 100vh;
`;

const Panel = ({ centerHorizontal, centerVertical, children }) => (
  <PanelStyled
    css={{
      justifyContent: centerHorizontal && 'center',
      alignItems: centerVertical && 'center',
    }}
  >
    {children}
  </PanelStyled>
);

Panel.propTypes = {
  centerHorizontal: PropTypes.bool,
  centerVertical: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Panel.defaultProps = {
  centerHorizontal: false,
  centerVertical: false,
};

export default Panel;
