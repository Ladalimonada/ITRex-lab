import React from 'react';
import { Wrapper, StyledRadioButton, StyledLabel } from './RadioButton.styled';

export type RadioButtonProps = {
  label: string,
  isDisabled: boolean,
  key?: string,
  id: string,

};


export function RadioButton({
  label, key, isDisabled, ...props
}:RadioButtonProps) {
  // console.log(isDoctorSelected);
  // const isDisabled = !isDoctorSelected && !slots.find((timeItem) => {console.log(timeItem); return timeItem === value;});

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
