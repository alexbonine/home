import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Colors from '../../styles/colors';

const Item = styled.div`
  display: inline-block;
  margin-right: 16px;

  &:last-child {
    margin-right: 0;
  }
`;

const Label = styled.h5`
  color: ${({ selected }) => (selected ? Colors.gray : Colors.white)};
  font-size: 1.5em;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const GalleryHeaderItem = ({ label, onSelect, value, selected }) => {
  const onClick = useCallback(() => {
    onSelect(value);
  }, []);

  return (
    <Item onClick={onClick}>
      <Label selected={selected}>{label}</Label>
    </Item>
  );
};

GalleryHeaderItem.propTypes = {
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default GalleryHeaderItem;
