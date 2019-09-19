import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Colors from '../../styles/colors';
import { mqDesktop, mqTablet } from '../../styles/screenSize';
import App from '../../styles/constants/app';

const getContainerPaddingTop = (screenSize, paddingNavbar) => {
  if (
    paddingNavbar === true ||
    (screenSize === App.tablet && (paddingNavbar === App.tablet || paddingNavbar === App.tabletOnly)) ||
    (screenSize === App.desktop && (paddingNavbar === App.desktop || paddingNavbar === App.tablet)) ||
    (screenSize === App.mobile && (paddingNavbar === App.mobile || paddingNavbar === App.mobileOnly))
  ) {
    return App.headerHeight;
  }

  return '0';
};

const containerPadding = (screenSize) => ({ gutters, paddingNavbar }) => {
  const paddingGutters = gutters ? App.gutters[screenSize] : '0';
  const paddingTop = getContainerPaddingTop(screenSize, paddingNavbar);

  return `${paddingTop} ${paddingGutters} ${App.headerHeight} ${paddingGutters}`;
};

const PanelContainer = styled.div`
  align-items: ${({ centerHorizontal }) => centerHorizontal && 'center'};
  background: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: ${({ centerVertical }) => centerVertical && 'center'};
  margin: 0 auto;
  min-height: 100vh;
  padding: ${containerPadding(App.mobile)};
  position: relative;

  ${mqTablet} {
    padding: ${containerPadding(App.tablet)};
  }

  ${mqDesktop} {
    padding: ${containerPadding(App.desktop)};
  }
`;

const PanelTitle = styled.h3`
  font-size: 48px;
  color: ${Colors.textLight};
  margin-bottom: ${App.full};

  ${mqTablet} {
    font-size: 64px;
  }
`;

const Panel = ({ backgroundColor, centerHorizontal, centerVertical, children, gutters, paddingNavbar, title }) => (
  <PanelContainer
    backgroundColor={backgroundColor}
    centerHorizontal={centerHorizontal}
    centerVertical={centerVertical}
    gutters={gutters}
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
  gutters: PropTypes.bool,
  paddingNavbar: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  title: PropTypes.string,
};

Panel.defaultProps = {
  backgroundColor: Colors.backgroundDark,
  centerHorizontal: false,
  centerVertical: false,
  gutters: false,
  paddingNavbar: false,
  title: '',
};

export default Panel;
