import React from 'react';
import { Wrapper, StyledRadioButton, StyledLabel } from './RadioButton.styled';

export function RadioButton({
  label, isDisabled, key, ...props
}) {
  return (
    <Wrapper isDisabled={isDisabled}>
      {!isDisabled ? (
        <StyledRadioButton
          {...props}
          id={label}
          type="radio"
          name="time"
          key={key}
        />
      ) : null}
      <StyledLabel htmlFor={label} isDisabled={isDisabled} {...props}>
        {label}
      </StyledLabel>
    </Wrapper>
  );
}
