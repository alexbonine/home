import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
// import { css } from '@emotion/core';
// import Colors from '../../styles/colors';
import GalleryItem from './galleryItem';
import GalleryHeader, { All } from './galleryHeader';
// import { flexCenterColumn } from '../../styles/flex';

const GalleryContainer = styled.div``;

const ItemContainer = styled.div`
  margin: 20px 0;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Gallery = ({ all, headers, items }) => {
  const [selected, setSelected] = useState(all ? All : items[0].categories[0]);
  const orderedSections = useMemo(() => {
    const sections = {};

    items.forEach((item) => {
      item.categories.forEach((category) => {
        if (!sections.hasOwnProperty(category)) {
          sections[category] = [];
        }

        sections[category].push(item);
      });
    });

    if (all) {
      sections[All] = Object.keys(sections).reduce((accum, key) => {
        if (sections.hasOwnProperty(key) && sections[key].length) {
          accum.push(sections[key][0]);
        }

        return accum;
      }, []);
    }

    return sections;
  }, [all, items]);

  const shownItems = (selected === All ? orderedSections[All] : orderedSections[selected]) || [];

  return (
    <GalleryContainer>
      <GalleryHeader all={all} items={headers} onSelect={setSelected} selected={selected} />
      <ItemContainer>
        {shownItems.map(({
 image, label, link, subtitle 
}) => (
          <GalleryItem image={image} key={`gallery-item-${label}`} label={label} link={link} subtitle={subtitle} />
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
