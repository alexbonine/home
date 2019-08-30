import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Colors from '../../styles/colors';

const Image = styled.div`
  background: ${({ image }) => `url(${image}) center center/cover`};
  max-width: 100%;
  transition: opacity 0.5s;
  height: 250px;
  width: 400px;
`;

const Text = styled.div`
  z-index: 2;
  text-align: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const Title = styled.div`
  color: ${Colors.blue};
  font-size: 2em;
  font-weight: 600;
`;

const Subtitle = styled.div`
  font-size: 1.5em;
  color: ${Colors.green};
`;

const Link = styled.a`
  color: ${Colors.purple};
  z-index: 2;
  text-align: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 1.5em;
`;

const Item = styled.div`
  position: relative;
  /* background-size: cover;
  background-position: center center; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* text-transform: uppercase; */
  /* font-size: 10px; */
  /* line-height: 10px; */
  /* border-radius: 4px; */
  /* box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.2); */

  &:hover {
    cursor: pointer;
    background: ${Colors.white};

    ${Image} {
      opacity: 0;
    }

    ${Text} {
      opacity: 1;
      top: 24%;
    }

    ${Link} {
      opacity: 1;
      bottom: 24%;
    }
  }
`;

const GalleryItem = ({ image, label, link, subtitle }) => (
  <Item>
    <Image image={image} />
    <Text>
      <Title>{label}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Text>
    {link && <Link href={link}>Learn More</Link>}
  </Item>
);

// export const GalleryItemPropType = PropTypes.shape({
//   category: PropTypes.arrayOf(PropTypes.string),
//   image: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   link: PropTypes.string,
// });

GalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  subtitle: PropTypes.string,
};

GalleryItem.defaultProps = {
  link: '',
  subtitle: '',
};

export default GalleryItem;
