/** @jsxImportSource @emotion/react */
import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Colors from '@/styles/colors';

export const ButtonColors = {
  green: 'green',
  purple: 'purple',
  whiteGreen: 'whiteGreen',
  whitePurple: 'whitePurple',
};

const ClickDelayTime = 300;

const activeClass = css`
  &:active {
    box-shadow: none;
  }
`;

const activeGrayClass = css`
  &:active {
    box-shadow: none;
    opacity: 0.8;
  }
`;

const disabledHoverClass = css`
  &:hover {
    background: ${Colors.gray};
    /* color: ${Colors.white}; */
    cursor: auto;
  }
`;

const getCss = ({ color, disabled }) => {
  const classes = [];

  if (disabled) {
    classes.push(disabledHoverClass);
  }

  switch (color) {
    case ButtonColors.whiteGreen:
    case ButtonColors.whitePurple:
      classes.push(activeGrayClass);
      break;
    default:
      classes.push(activeClass);
      break;
  }

  return classes;
};

const ButtonStyling = ({ color, disabled, minWidth }) => {
  const defaultStyling = { minWidth: `${minWidth}px` };
  const disabledStyling = disabled
    ? {
        cursor: 'auto',
        boxShadow: 'none',
        opacity: 0.6,
        background: Colors.gray,
        border: `1px solid ${Colors.gray}`,
      }
    : {};

  switch (color) {
    case ButtonColors.green:
      return {
        ...defaultStyling,
        background: Colors.green,
        border: `1px solid ${Colors.green}`,
        color: Colors.white,
        ...disabledStyling,
      };
    case ButtonColors.purple:
      return {
        ...defaultStyling,
        background: Colors.purple,
        border: `1px solid ${Colors.purple}`,
        color: Colors.white,
        ...disabledStyling,
      };
    case ButtonColors.whitePurple:
      return {
        ...defaultStyling,
        background: Colors.white,
        border: `1px solid ${Colors.white}`,
        color: Colors.purple,
        ...disabledStyling,
      };
    case ButtonColors.whiteGreen:
    default:
      return {
        ...defaultStyling,
        background: Colors.white,
        border: `1px solid ${Colors.white}`,
        color: Colors.green,
        ...disabledStyling,
      };
  }
};

const ButtonComponent = styled.button(
  {
    boxShadow: '2px 3px 8px 0 rgba(0, 0, 0, 0.29)',
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px',
    outline: 0,
    padding: '14px 16px',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'all 0.25s ease-out',
    userSelect: 'none',
  },
  ButtonStyling
);

const Button = ({ children, className, clickDelay, color, disabled, id, minWidth, onClick, text }) => {
  const [delayTimeout, setDelayTimeout] = useState(null);
  useEffect(() => () => {
    if (delayTimeout) {
      clearTimeout(delayTimeout);
    }
  });
  const callback = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled || (clickDelay && delayTimeout)) {
        return;
      }

      if (clickDelay) {
        setDelayTimeout(
          setTimeout(() => {
            setDelayTimeout(null);
            onClick(id);
          }, ClickDelayTime)
        );
      } else {
        onClick(id);
      }
    },
    [disabled, clickDelay, delayTimeout, setDelayTimeout, onClick]
  );

  return (
    <ButtonComponent
      className={className}
      color={color}
      css={getCss({ color, disabled })}
      disabled={disabled}
      minWidth={minWidth}
      onClick={callback}
    >
      {children || text}
    </ButtonComponent>
  );
};

const ButtonPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  clickDelay: PropTypes.bool,
  color: PropTypes.oneOf(Object.keys(ButtonColors)),
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  minWidth: PropTypes.number,
  onClick: PropTypes.func,
  text: PropTypes.string,
};

Button.propTypes = ButtonPropTypes;

Button.defaultProps = {
  children: null,
  className: '',
  clickDelay: false,
  color: ButtonColors.whiteGreen,
  disabled: false,
  minWidth: 200,
  onClick: () => {},
  text: 'Button',
};

export const ButtonShape = PropTypes.shape(ButtonPropTypes);

export default Button;
