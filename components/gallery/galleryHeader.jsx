import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import GalleryHeaderItem from './galleryHeaderItem';

export const All = 'all';

const Header = styled.div`
  display: flex;
  justify-content: center;
`;

const GalleryHeader = ({ all, items, onSelect, selected }) => {
  const headerItems = useMemo(() => {
    if (all) {
      return [{ label: 'All', value: All }, ...items];
    }

    return items;
  }, [items]);

  return (
    <Header>
      {headerItems.map(({ label, value }) => (
        <GalleryHeaderItem
          key={`gallery-header-item-${value}`}
          label={label}
          onSelect={onSelect}
          selected={selected === value}
          value={value}
        />
      ))}
    </Header>
  );
};

GalleryHeader.propTypes = {
  all: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default GalleryHeader;
