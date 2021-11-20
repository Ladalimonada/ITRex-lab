import React from 'react';
import { Wrapper, StyledRadioButton, StyledLabel } from './RadioButton.styled';

export function RadioButton({
  label, disabled, ...props
}) {
  return (
    <Wrapper disabled={disabled}>
      {!disabled ? (
        <StyledRadioButton
          {...props}
          id={label}
          type="radio"
          name="time"
        />
      ) : null}
      <StyledLabel htmlFor={label} disabled={disabled} {...props}>
        {label}
      </StyledLabel>
    </Wrapper>
  );
}
