import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTransition, animated } from 'react-spring';
// import { css } from '@emotion/react';
import GalleryItem, { GalleryItemShape, ImageLabel, Item } from './galleryItem';
import GalleryHeader, { All, GalleryHeaderItemShape } from './galleryHeader';
import useMeasure from '../../hooks/useMeasure';
import useMediaColumns from '../../hooks/useMediaColumns';
import App from '../../styles/constants/app';
import Colors from '../../styles/colors';

const ItemWidth = 400;

const GalleryContainer = styled.div``;

const ItemContainer = styled.div`
  margin: 20px auto;
  width: 100%;
  height: 100%;
  position: relative;
`;

const AnimatedDiv = styled(animated.div)`
  position: absolute;
  will-change: transform, width, height, opacity;
  padding: 0;

  &:nth-of-type(2) {
    background: purple;
    ${Item} {
      background: ${Colors.white};
    }

    ${ImageLabel} {
      left: 20%;
    }
  }
`;

const Gallery = ({ all, headers, items }) => {
  const [selected, setSelected] = useState(all ? All : items[0].categories[0]);
  const orderedSections = useMemo(() => {
    const sections = {};

    items.forEach((item, index) => {
      item.categories.forEach((category) => {
        if (!sections.hasOwnProperty(category)) {
          sections[category] = [];
        }

        sections[category].push({ ...item, key: `galery-item-${category}-${index}` });
      });
    });

    if (all) {
      const presentImages = {};
      sections[All] = Object.keys(sections).reduce((accum, key) => {
        let index = 0;

        if (sections.hasOwnProperty(key) && sections[key].length > 0) {
          while (index < sections[key].length) {
            if (!presentImages.hasOwnProperty(sections[key][index].image)) {
              presentImages[sections[key][index].image] = true;
              accum.push(sections[key][index]);
              break;
            } else {
              index += 1;
            }
          }
        }

        return accum;
      }, []);
    }

    return sections;
  }, [all, items]);

  const shownItems = (selected === All ? orderedSections[All] : orderedSections[selected]) || [];

  const [{ ref }, { width: measureWidth }] = useMeasure();
  const columns = useMediaColumns(
    [
      { query: App.mobile, value: 1 },
      { query: App.tablet, value: 2 },
      { query: App.desktop, value: 3 },
    ],
    1
  );
  const heights = new Array(columns).fill(0); // Each column gets a height starting with zero
  const gridItems = shownItems.map((child, i) => {
    const column = i % columns;

    const xy = [(measureWidth / columns) * column, heights[column]];
    heights[column] += 250;

    return {
      ...child,
      xy,
      width: measureWidth / columns,
      height: 250,
    };
  });

  const transitions = useTransition(gridItems, (item) => item.key, {
    from: ({ xy, width }) => ({
      xy,
      width,
      height: 0,
      opacity: 0,
    }),
    enter: ({ xy, width, height }) => ({
      xy,
      width,
      height,
      opacity: 1,
    }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });

  return (
    <GalleryContainer>
      <GalleryHeader all={all} items={headers} onSelect={setSelected} selected={selected} />
      <ItemContainer ref={ref} style={{ height: Math.max(...heights), width: `${columns * ItemWidth}px` }}>
        {transitions.map(({ item: { image, imageLabel, label, link, subtitle }, props: { xy, ...rest }, key }) => (
          <AnimatedDiv
            key={key}
            style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}
          >
            <GalleryItem
              image={image}
              imageLabel={imageLabel}
              label={label}
              link={link}
              subtitle={subtitle}
              itemWidth={ItemWidth}
            />
          </AnimatedDiv>
        ))}
      </ItemContainer>
    </GalleryContainer>
  );
};

Gallery.propTypes = {
  all: PropTypes.bool,
  headers: PropTypes.arrayOf(GalleryHeaderItemShape).isRequired,
  items: PropTypes.arrayOf(GalleryItemShape).isRequired,
};

Gallery.defaultProps = {
  all: false,
};

export default Gallery;
