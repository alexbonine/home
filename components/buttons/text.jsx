/** @jsxImportSource @emotion/react */
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Colors from '../../styles/colors';

export const ButtonColors = {
  green: 'green',
  purple: 'purple',
  white: 'white',
};

const activeClass = css`
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

const disabledHoverClass = css`
  &:hover {
    color: ${Colors.gray};
    cursor: auto;
  }
`;

const getCss = ({ disabled }) => {
  const classes = [activeClass];

  if (disabled) {
    classes.push(disabledHoverClass);
  }

  return classes;
};

const ButtonStyling = ({ color, disabled, minWidth }) => {
  const defaultStyling = { color: Colors[color] };

  if (minWidth) {
    defaultStyling.minWidth = `${minWidth}px`;
  }

  if (disabled) {
    return {
      ...defaultStyling,
      cursor: 'auto',
      boxShadow: 'none',
      opacity: 0.6,
      color: Colors.gray,
    };
  }

  return defaultStyling;
};

const TextButtonComponent = styled.button(
  {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '20px',
    outline: 0,
    padding: '0',
    // textAlign: 'center',
    textDecoration: 'none',
    transition: 'all 0.25s ease-out',
    userSelect: 'none',
  },
  ButtonStyling
);

const TextButton = ({ children, className, color, disabled, id, minWidth, onClick, text }) => {
  const callback = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    if (disabled) {
      return;
    }

    onClick(id);
  });

  return (
    <TextButtonComponent
      className={className}
      color={color}
      css={getCss({ disabled })}
      disabled={disabled}
      minWidth={minWidth}
      onClick={callback}
    >
      {children || text}
    </TextButtonComponent>
  );
};

const TextButtonPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(ButtonColors)),
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  minWidth: PropTypes.number,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

TextButton.propTypes = TextButtonPropTypes;

TextButton.defaultProps = {
  children: null,
  className: '',
  color: ButtonColors.white,
  disabled: false,
  minWidth: undefined,
  onClick: () => {},
  text: 'Button',
};

export const TextButtonShape = PropTypes.shape(TextButtonPropTypes);

export default TextButton;
