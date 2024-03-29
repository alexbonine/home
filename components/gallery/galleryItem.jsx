import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Colors from '@/styles/colors';

const Image = styled.div`
  background: ${({ image }) => `url(${image}) center center/cover`};
  max-width: 100%;
  transition: opacity 0.5s;
  height: 250px;
`;

export const ImageLabel = styled.div`
  opacity: 1;
  transition: all 0.3s ease-in-out;
  position: absolute;
  top: 24%;
  left: 50%;
  color: ${Colors.green};
  font-size: 2rem;
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
  color: ${Colors.green};
  font-size: 2em;
  font-weight: 600;
`;

const Subtitle = styled.div`
  font-size: 1.5em;
  color: ${Colors.green};
`;

const LearnMore = styled.p`
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

export const Item = styled.div`
  position: relative;
  display: block;
  /* background-size: cover;
  background-position: center center; */
  background-color: ${Colors.grayLight};
  width: ${({ itemWidth }) => `${itemWidth}px`};
  /* width: 400px; */
  height: 100%;
  overflow: hidden;
  /* text-transform: uppercase; */
  /* font-size: 10px; */
  /* line-height: 10px; */
  /* border-radius: 4px; */
  /* box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.2); */

  &:hover {
    cursor: pointer;
    background: ${Colors.backgroundNone};

    ${Image} {
      opacity: 0;
    }

    ${ImageLabel} {
      opacity: 0;
    }

    ${Text} {
      opacity: 1;
      top: 24%;
    }

    ${LearnMore} {
      opacity: 1;
      bottom: 24%;
    }
  }
`;

const GalleryItem = ({ image, imageLabel, label, link, subtitle, itemWidth }) => {
  const additionalProps = link ? { href: link, as: 'a' } : {};

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Item itemWidth={itemWidth} {...additionalProps}>
      <Image image={image} />
      {imageLabel && <ImageLabel>{imageLabel}</ImageLabel>}
      <Text>
        <Title>{label}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Text>
      {link && <LearnMore>Learn More</LearnMore>}
    </Item>
  );
};

// export const GalleryItemPropType = PropTypes.shape({
//   category: PropTypes.arrayOf(PropTypes.string),
//   image: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   link: PropTypes.string,
// });

const GalleryItemPropTypes = {
  image: PropTypes.string.isRequired,
  imageLabel: PropTypes.string,
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  subtitle: PropTypes.string,
  itemWidth: PropTypes.number,
};

GalleryItem.propTypes = GalleryItemPropTypes;

GalleryItem.defaultProps = {
  imageLabel: '',
  link: '',
  subtitle: '',
  itemWidth: 400,
};

export const GalleryItemShape = PropTypes.shape(GalleryItemPropTypes);

export default GalleryItem;
