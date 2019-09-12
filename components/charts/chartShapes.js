import PropTypes from 'prop-types';

export const HierarchyDataShape = PropTypes.shape({
  children: PropTypes.array, // HierarchyDataShape
  name: PropTypes.string.isRequired,
  proficiency: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.number,
});
