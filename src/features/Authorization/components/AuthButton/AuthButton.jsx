import React from 'react';
import { StyledAuthButton } from './AuthButton.styled';

export function AuthButton({
  onClick, children, margin, type,
}) {
  return (
    <StyledAuthButton
      margin={margin}
      onClick={onClick}
      type={type}
    >
      <span>{children}</span>
    </StyledAuthButton>
  );
}
