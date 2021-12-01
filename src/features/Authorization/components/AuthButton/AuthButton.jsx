import React from 'react';
import { StyledAuthButton } from './AuthButton.styled';

export function AuthButton({
  onClick, children, marginType,
}) {
  return (
    <StyledAuthButton
      marginType={marginType}
      onClick={onClick}
    >
      <span>{children}</span>
    </StyledAuthButton>
  );
}
