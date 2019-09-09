import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Colors from '../../styles/colors';

const PanelContainer = styled.div`
  align-items: ${({ centerHorizontal }) => centerHorizontal && 'center'};
  background: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: ${({ centerVertical }) => centerVertical && 'center'};
  margin: 0 auto;
  min-height: 100vh;
  padding: ${({ paddingNavbar }) => (paddingNavbar ? '10vh 0 0 0' : '0')};
  position: relative;
`;

const PanelTitle = styled.h3`
  font-size: 4em;
  font-family: 'Playfair Display', serif;
  color: ${Colors.textLight};
  margin-bottom: 16px;
`;

const Panel = ({ backgroundColor, centerHorizontal, centerVertical, children, paddingNavbar, title }) => (
  <PanelContainer
    backgroundColor={backgroundColor}
    centerHorizontal={centerHorizontal}
    centerVertical={centerVertical}
    paddingNavbar={paddingNavbar}
  >
    {title && <PanelTitle>{title}</PanelTitle>}
    {children}
  </PanelContainer>
);

Panel.propTypes = {
  backgroundColor: PropTypes.string, // Colors
  centerHorizontal: PropTypes.bool,
  centerVertical: PropTypes.bool,
  children: PropTypes.node.isRequired,
  paddingNavbar: PropTypes.bool,
  title: PropTypes.string,
};

Panel.defaultProps = {
  backgroundColor: Colors.backgroundDark,
  centerHorizontal: false,
  centerVertical: false,
  paddingNavbar: false,
  title: '',
};

export default Panel;
