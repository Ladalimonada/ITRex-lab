import React from 'react';
import { StyledButton } from './SubmitButton.styled';

export function SubmitButton({
  onClick, children, isDisabled, type = 'button',
}) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      isDisabled={isDisabled}
    >
      {children}
    </StyledButton>
  );
}
