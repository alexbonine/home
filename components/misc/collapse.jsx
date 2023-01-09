import PropTypes from 'prop-types';
import { animated, useSpring } from 'react-spring';
import styled from '@emotion/styled';
import useMeasure from '../../hooks/useMeasure';
import usePrevious from '../../hooks/usePrevious';
import App from '../../styles/constants/app';

const CollapseContainer = styled(animated.div)`
  overflow: hidden;
  will-change: height, opacity;
  margin-bottom: ${App.quarter}; /* added to let any letters hang down */
`;

const Collapse = ({ children, isOpen }) => {
  const previous = usePrevious(isOpen);
  const [{ ref }, { height: measureHeight }] = useMeasure();
  const containerHeight = measureHeight + 4; // quarter margin bottom
  const { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: isOpen ? containerHeight : 0, opacity: isOpen ? 1 : 0 },
  });

  return (
    <CollapseContainer style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
      <animated.div ref={ref}>{children}</animated.div>
    </CollapseContainer>
  );
};

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
};

Collapse.defaultProps = {
  isOpen: false,
};

export default Collapse;
