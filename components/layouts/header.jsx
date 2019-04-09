import PropTypes from 'prop-types';

const Header = ({ children }) => <div>Header</div>;

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
