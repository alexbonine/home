import { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import GalleryHeaderItem from './galleryHeaderItem';

export const All = 'all';

const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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

export const GalleryHeaderItemShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
});

GalleryHeader.propTypes = {
  all: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(GalleryHeaderItemShape).isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default GalleryHeader;
