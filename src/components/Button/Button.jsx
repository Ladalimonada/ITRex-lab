import React from 'react';
import { StyledButton } from './Button.styled';

export function Button({
  onClick, isActive, children, margin, isDisabled,
}) {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      isActive={isActive}
      margin={margin}
      isDisabled={isDisabled}
    >
      {children}
    </StyledButton>
  );
}
