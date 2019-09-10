import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
// import Colors from '../../styles/colors';

const Container = styled.div`
  /* display: flex; */
`;

// const TextContainer = styled.div``;

// const Link = styled.a``;

const Image = styled.img``;

const PortfolioImages = ({ images, sizeSuffix }) => {
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

  const { alt, id, src } = memoImages[shownIndex];

  return (
    <Container>
      <Image src={src} id={id} alt={alt} />
    </Container>
  );
};

export const PortfolioImageShape = PropTypes.shape({
  alt: PropTypes.string,
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
});

PortfolioImages.propTypes = {
  images: PropTypes.arrayOf(PortfolioImageShape).isRequired,
  sizeSuffix: PropTypes.string,
};

PortfolioImages.defaultProps = {
  sizeSuffix: '-400',
};

export default PortfolioImages;
