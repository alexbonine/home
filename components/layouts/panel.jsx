import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Colors from '../../styles/colors';
import { mqTablet } from '../../styles/screenSize';
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

const containerSpacing = (screenSize, { fullHeight, gutters, paddingNavbar }) => {
  const paddingGutters = gutters ? App.gutters[screenSize] : '0';
  const paddingTop = getContainerPaddingTop(screenSize, paddingNavbar);
  const heightStuff = fullHeight ? { display: 'flex', flexDirection: 'column' } : {};

  return {
    ...heightStuff,
    padding: `${paddingTop} ${paddingGutters} ${App.headerHeight} ${paddingGutters}`,
  };
};

const PanelContainer = styled.div(
  {
    minHeight: '100vh',
    position: 'relative',
  },
  ({ backgroundColor, ...rest }) => ({
    background: backgroundColor,
    ...containerSpacing(App.mobile, rest),
    [mqTablet]: containerSpacing(App.tablet, rest),
    [mqTablet]: containerSpacing(App.tablet, rest),
  })
);

const PanelChild = styled.div(
  {
    maxWidth: App.maxWidth,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },
  ({ centerHorizontal, centerVertical, fullHeight, fullWidth   }) => ({
    alignItems: (centerHorizontal && 'center') || undefined,
    justifyContent: (centerVertical && 'center') || undefined,
    flex: (fullHeight && '1 1 auto') || undefined,
    width: (fullWidth && '100%') || undefined,
  })
);

const PanelTitle = styled.h3`
  font-size: 48px;
  color: ${Colors.textLight};
  margin-bottom: ${App.full};

  ${mqTablet} {
    font-size: 64px;
  }
`;

const Panel = ({
  backgroundColor,
  centerHorizontal,
  centerVertical,
  children,
  fullHeight,
  fullWidth,
  gutters,
  paddingNavbar,
  title,
}) => (
  <PanelContainer
    backgroundColor={backgroundColor}
    fullHeight={fullHeight}
    gutters={gutters}
    paddingNavbar={paddingNavbar}
  >
    <PanelChild
      centerHorizontal={centerHorizontal}
      centerVertical={centerVertical}
      fullHeight={fullHeight}
      fullWidth={fullWidth}
    >
      {title && <PanelTitle>{title}</PanelTitle>}
      {children}
    </PanelChild>
  </PanelContainer>
);

Panel.propTypes = {
  backgroundColor: PropTypes.string, // Colors
  centerHorizontal: PropTypes.bool,
  centerVertical: PropTypes.bool,
  children: PropTypes.node.isRequired,
  fullHeight: PropTypes.bool,
  fullWidth: PropTypes.bool,
  gutters: PropTypes.bool,
  paddingNavbar: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  title: PropTypes.string,
};

Panel.defaultProps = {
  backgroundColor: Colors.backgroundDark,
  centerHorizontal: false,
  centerVertical: false,
  fullHeight: false,
  fullWidth: false,
  gutters: false,
  paddingNavbar: false,
  title: '',
};

export default Panel;
