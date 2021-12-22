import React from 'react';
import { StyledButton } from './SubmitButton.styled';
import { SubmitButtonProps } from './SubmitButton.types';

export function SubmitButton({
  children, isDisabled,
}:SubmitButtonProps) {
  return (
    <StyledButton
    isDisabled={isDisabled}
    type="submit"
    >
      {children}
    </StyledButton>
  );
}
