import { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Button, { ButtonColors, ButtonShape } from '@/components/buttons/button';

const RadioButtonsComponent = styled.div`
  display: flex;
`;

const RadioButtons = ({ buttons, defaultColor, disabled, onClick, selected, selectedColor }) => {
  const callbacks = useMemo(
    () =>
      buttons.map(
        ({ id }) =>
          () =>
            onClick(id)
      ),
    [buttons, onClick]
  );

  return (
    <RadioButtonsComponent disabled={disabled}>
      {buttons.map(({ children, disabled: buttonDisabled, id, text }, index) => (
        <Button
          color={selected === id ? selectedColor : defaultColor}
          disabled={buttonDisabled}
          id={id}
          key={`radio-${id}`}
          onClick={callbacks[index]}
          text={text}
        >
          {children}
        </Button>
      ))}
    </RadioButtonsComponent>
  );
};

RadioButtons.propTypes = {
  buttons: PropTypes.arrayOf(ButtonShape).isRequired,
  defaultColor: PropTypes.oneOf(Object.keys(ButtonColors)),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  selected: PropTypes.string,
  selectedColor: PropTypes.oneOf(Object.keys(ButtonColors)),
};

RadioButtons.defaultProps = {
  defaultColor: ButtonColors.purple,
  disabled: false,
  onClick: () => {},
  selected: '',
  selectedColor: ButtonColors.whiteGreen,
};

export default RadioButtons;
