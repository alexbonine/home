import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useTransition, animated } from 'react-spring';
// import { css } from '@emotion/core';
// import Colors from '../../styles/colors';
import GalleryItem from './galleryItem';
import GalleryHeader, { All } from './galleryHeader';
import useMeasure from '../../hooks/useMeasure';
import useMedia from '../../hooks/useMedia';
// import { flexCenterColumn } from '../../styles/flex';

const GalleryContainer = styled.div``;

const ItemContainer = styled.div`
  margin: 20px 0;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  position: relative;
  /* display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
`;

const AnimatedDiv = styled(animated.div)`
  position: absolute;
  will-change: transform, width, height, opacity;
  padding: 0;
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
  const columns = useMedia(['(min-width: 768px)'], [3], 2);
  const heights = new Array(columns).fill(0); // Each column gets a height starting with zero
  const gridItems = shownItems.map((child, i) => {
    // const column = heights.indexOf(Math.min(...heights)); // Basic masonry-grid placing, puts tile into the smallest column using Math.min
    // const xy = [(measureWidth / columns) * column, (heights[column] += 300 / 2) - 300 / 2]; // X = container width / number of columns * column index, Y = it's just the height of the current column
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
    from: ({ xy, width, height }) => ({
      xy,
      width,
      height,
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
      <ItemContainer ref={ref} style={{ height: Math.max(...heights) }}>
        {transitions.map(({ item: {
 image, label, link, subtitle 
}, props: { xy, ...rest }, key }) => (
          <AnimatedDiv
                    key={key}
                    style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}
          >
                    <GalleryItem image={image} label={label} link={link} subtitle={subtitle} />
                  </AnimatedDiv>
        ))}
      </ItemContainer>
    </GalleryContainer>
  );
};

Gallery.propTypes = {
  all: PropTypes.bool,
  headers: PropTypes.array.isRequired,
  items: PropTypes.array.isRequired,
};

Gallery.defaultProps = {
  all: false,
};

export default Gallery;
