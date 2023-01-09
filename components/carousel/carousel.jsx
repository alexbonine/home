import { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTransition, animated } from 'react-spring';
import App from '../../styles/constants/app';
import Colors from '../../styles/colors';

const Container = styled.div`
  position: relative;
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  overflow: hidden;
  flex-shrink: 0;
`;

const AnimatedImage = styled(animated.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  will-change: transform, opacity;
`;

const ChevronContainer = styled.div`
  position: absolute;
  display: block;
  top: calc(50% - 12.5px);
  transform: translate(0, -50%);
`;

const ChevronContainerLeft = styled(ChevronContainer)`
  left: ${App.full};
`;

const ChevronContainerRight = styled(ChevronContainer)`
  right: ${App.full};
`;

const Chevron = styled.div`
  &:before {
    border-style: solid;
    border-width: 5px 5px 0 0;
    border-color: ${Colors.gray};
    content: '';
    display: inline-block;
    height: 20px;
    position: relative;
    vertical-align: top;
    width: 20px;
    opacity: 0;
  }

  ${Container}:hover &:before {
    opacity: 0.5;
  }

  &:hover:before {
    opacity: 1 !important;
    cursor: pointer;
  }
`;

const ChevronLeft = styled(Chevron)`
  &:before {
    transform: rotate(225deg);
  }
`;

const ChevronRight = styled(Chevron)`
  &:before {
    transform: rotate(45deg);
  }
`;

const Counter = styled.div`
  color: ${Colors.gray};
  position: absolute;
  right: ${App.full};
  bottom: ${App.full};
  font-size: 20px;
  font-weight: 600;
`;

const Carousel = ({ height, images, sizeSuffix, width }) => {
  const [shownIndex, setShownIndex] = useState(0);
  const memoImages = useMemo(
    () =>
      images.map(({ alt, id, src }) => ({
        alt,
        id,
        src: src.replace(/(.jpg|.png|.svg)$/, `${sizeSuffix}$1`),
      })),
    [images]
  );
  const onClickLeft = useCallback(() => {
    if (shownIndex === 0) {
      setShownIndex(memoImages.length - 1);
      return;
    }

    setShownIndex(shownIndex - 1);
  });

  const onClickRight = useCallback(() => {
    if (shownIndex === memoImages.length - 1) {
      setShownIndex(0);
      return;
    }

    setShownIndex(shownIndex + 1);
  });

  const transitions = useTransition(shownIndex, (p) => p, {
    from: { opacity: 1, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0.5, transform: 'translate3d(-50%,0,0)' },
  });

  if (images.length === 0) {
    return null;
  }

  return (
    <Container height={height} width={width}>
      {transitions.map(({ item, props }) => {
        const { alt, id, src } = memoImages[item];
        return <AnimatedImage key={id} style={props} src={src} id={id} alt={alt} />;
      })}
      <ChevronContainerLeft>
        <ChevronLeft onClick={onClickLeft} />
      </ChevronContainerLeft>
      <ChevronContainerRight>
        <ChevronRight onClick={onClickRight} />
      </ChevronContainerRight>
      <Counter>
        <span>{shownIndex + 1}</span>&nbsp;/&nbsp;<span>{memoImages.length}</span>
      </Counter>
    </Container>
  );
};

export const CarouselImageShape = PropTypes.shape({
  alt: PropTypes.string,
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
});

Carousel.propTypes = {
  height: PropTypes.number,
  images: PropTypes.arrayOf(CarouselImageShape).isRequired,
  sizeSuffix: PropTypes.string,
  width: PropTypes.number,
};

Carousel.defaultProps = {
  height: 250,
  sizeSuffix: '-400',
  width: 400,
};

export default Carousel;
