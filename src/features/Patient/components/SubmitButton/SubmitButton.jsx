import React from 'react';
import { StyledButton } from './SubmitButton.styled';

export function SubmitButton({
  onClick, children, isDisabled,
}) {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      isDisabled={isDisabled}
    >
      {children}
    </StyledButton>
  );
}
