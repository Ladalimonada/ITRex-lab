import React from 'react';
import { StyledAuthButton } from './AuthButton.styled';

export function AuthButton({
  onClick, children, margin = '7vh 0 0',
}) {
  return <StyledAuthButton type="button" onClick={onClick} margin={margin}><span>{children}</span></StyledAuthButton>;
}
