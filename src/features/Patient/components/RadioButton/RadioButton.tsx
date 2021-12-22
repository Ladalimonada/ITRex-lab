import React from 'react';
import { Wrapper, StyledRadioButton, StyledLabel } from './RadioButton.styled';
import { RadioButtonProps } from './RadioButton.types';

export function RadioButton({
  label, key, isDisabled, ...props
}:RadioButtonProps) {
  return (
    <Wrapper {...props}>
      {!isDisabled ? (
        <StyledRadioButton
          {...props}
          type="radio"
          key={key}
          id={label}
          name="time"
        />
      ) : null}
      <StyledLabel htmlFor={label} isDisabled={isDisabled} label={label} {...props}>
        {label}
      </StyledLabel>
    </Wrapper>
  );
}
